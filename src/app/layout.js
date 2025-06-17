export const metadata = {
  title: "404 - Page Not Found / Page introvable",
  description: "The page you're looking for doesn’t exist. / La page que vous cherchez n'existe pas.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
