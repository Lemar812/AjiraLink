import type { Metadata } from "next";
import { ThemeProvider } from "@/components/site/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AjiraLink | Where Talent Meets Opportunities",
  description:
    "AjiraLink is a youth-focused digital employment and career development platform connecting students, graduates, and young professionals to jobs, internships, volunteer opportunities, field placements, mentorship, and career guidance.",
  icons: {
    icon: "/images/icons/favicon.ico",
    shortcut: "/images/icons/favicon.ico",
    apple: "/images/icons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const themeScript = `
    (() => {
      try {
        const key = "ajiralink-theme";
        const saved = window.localStorage.getItem(key);
        const theme = saved === "light" || saved === "dark" ? saved : "dark";
        window.localStorage.setItem(key, theme);
        document.documentElement.dataset.theme = theme;
      } catch {
        document.documentElement.dataset.theme = "dark";
      }
    })();
  `;

  return (
    <html lang="en" className="h-full antialiased" data-theme="dark" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
