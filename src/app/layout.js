import { Geist, Geist_Mono, Barlow } from "next/font/google";
import "./globals.css";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Metadata
export const metadata = {
  title: "Thomas Tepi - Web Developer Portfolio",
  description: "Portfolio of Thomas Tepi, showcasing web development projects, skills, and experience as a React.js and Node.js developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${barlow.variable}`}>
        {children}
      </body>
    </html>
  );
}
