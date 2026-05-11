import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AjiraLink | Where Talent Meets Opportunities",
  description:
    "AjiraLink is a youth-focused digital employment and career development platform connecting students, graduates, and young professionals to jobs, internships, volunteer opportunities, field placements, mentorship, and career guidance.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
