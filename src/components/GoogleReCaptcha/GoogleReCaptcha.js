import {
  useEffect,
  useRef,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useT } from "@/app/i18n/client";

const SITE_KEY = "6LfFmM8rAAAAAMMbAgUdchh0HNCfluN9Y4zydh_a";
const SCRIPT_ID = "recaptcha-script";

function buildRecaptchaSrc(hl = "en") {
  return `https://www.google.com/recaptcha/api.js?render=explicit&hl=${hl}`;
}

const GoogleReCaptcha = forwardRef(function GoogleReCaptcha(_, ref) {
  const { i18n } = useT();
  const hl = (i18n.resolvedLanguage || i18n.language || "en").split("-")[0];

  const widgetIdRef = useRef(null);
  const resolverRef = useRef(null);
  const readyIntervalRef = useRef(null);
  const containerRef = useRef(null);

  // Load or reload the script for the current language
  const loadScriptForLang = useCallback(async () => {
    const prev = document.getElementById(SCRIPT_ID);
    if (prev) prev.remove();

    // clear the global so Google injects a fresh API
    if (window.grecaptcha) {
      try {
        if (widgetIdRef.current != null) {
          window.grecaptcha.reset(widgetIdRef.current);
        }
      } catch {}
      delete window.grecaptcha;
    }

    return new Promise((resolve) => {
      const s = document.createElement("script");
      s.id = SCRIPT_ID;
      s.src = buildRecaptchaSrc(hl);
      s.async = true;
      s.defer = true;
      s.onload = resolve;
      document.head.appendChild(s);
    });
  }, [hl]);

  const renderWidget = useCallback(() => {
    if (
      !window.grecaptcha ||
      widgetIdRef.current !== null ||
      !containerRef.current
    )
      return;

    widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
      sitekey: SITE_KEY,
      size: "invisible",
      callback: (token) => {
        resolverRef.current?.(token);
        resolverRef.current = null;
      },
      "error-callback": () => {
        resolverRef.current?.(null);
        resolverRef.current = null;
      },
      "expired-callback": () => {
        resolverRef.current?.(null);
        resolverRef.current = null;
      },
      badge: "bottomright",
    });
  }, []);

  // Initial load / reload when language changes
  useEffect(() => {
    let mounted = true;

    (async () => {
      await loadScriptForLang();
      if (!mounted) return;

      const tick = () => {
        if (window.grecaptcha?.render) {
          clearInterval(readyIntervalRef.current);
          renderWidget();
        }
      };

      if (window.grecaptcha?.render) renderWidget();
      else readyIntervalRef.current = window.setInterval(tick, 50);
    })();

    return () => {
      mounted = false;
      clearInterval(readyIntervalRef.current);
    };
  }, [loadScriptForLang, renderWidget]);

  useImperativeHandle(ref, () => ({
    execute: () =>
      new Promise((resolve) => {
        if (widgetIdRef.current == null || !window.grecaptcha?.execute) {
          return resolve(null);
        }
        resolverRef.current = resolve;
        window.grecaptcha.execute(widgetIdRef.current);
      }),
    reset: () => {
      if (widgetIdRef.current != null && window.grecaptcha?.reset) {
        window.grecaptcha.reset(widgetIdRef.current);
      }
      resolverRef.current = null;
    },
  }));

  return <div id="recaptcha-invisible" ref={containerRef} />;
});

export default GoogleReCaptcha;
