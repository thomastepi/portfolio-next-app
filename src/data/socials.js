import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    name: "Email",
    icon: faEnvelope,
    url: "mailto: thomastepi@hotmail.com",
    ariaLabel: "Send me an email",
  },
  {
    name: "GitHub",
    icon: faGithub,
    url: "https://github.com/thomastepi",
    ariaLabel: "Visit my GitHub profile",
  },
  {
    name: "LinkedIn",
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/thomastepi",
    ariaLabel: "Visit my LinkedIn profile",
  },
  {
    name: "Twitter (X)",
    icon: faXTwitter,
    url: "https://twitter.com/tomtepi",
    ariaLabel: "Visit my Twitter profile",
  },
  {
    name: "WhatsApp",
    icon: faWhatsapp,
    url: "https://wa.me/12144314816",
    ariaLabel: "Send me a WhatsApp message",
  },
];

export default socials;
