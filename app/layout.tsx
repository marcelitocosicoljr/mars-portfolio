import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AOSInit } from "./aos";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Marcelito Cosicol Jr. — Senior Full-Stack Software Engineer",
  description:
    'Portfolio of Marcelito "Mars" Cosicol Jr., Senior Full-Stack Software Engineer specializing in React/Next.js, .NET, ETL data pipelines, UI/UX, and full-stack web development.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <AOSInit />
      <body className="bg-white font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
