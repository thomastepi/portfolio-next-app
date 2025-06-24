import { Providers } from "@/components/Providers/Providers";
import ErrorPage from "@/scenes/ErrorPage";

export const metadata = {
  title: "404 – Page Not Found / Page introuvable",
  description:
    "The page you're looking for doesn’t exist. / La page que vous cherchez n'existe pas.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Providers>
      <ErrorPage />
    </Providers>
  );
}
