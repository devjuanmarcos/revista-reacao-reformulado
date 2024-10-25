import type { Metadata } from "next";
import "./globals.css";
import { HtmlFontSizeProvider } from "@/context/HtmlFontSizeContext";
import { ThemeProvider } from "next-themes";
import { WindowSizeProvider } from "@/context/WindowSizeContext";
import { GeistSans } from "geist/font/sans";

import { Header } from "@/components/header/Header";
import { BarTools } from "@/components/barra-acessibilidade/BarTools";
import Script from "next/script";
import { PaginationProvider } from "@/context/PaginationContext";

const APP_NAME = "Revista Reação";
const APP_DEFAULT_TITLE = "Biomob";
const APP_TITLE_TEMPLATE = "%s";
const APP_DESCRIPTION = "Biomob!";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000"),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className="transition-all h-full w-full scrollbar-thin scrollbar-webkit duration-200 ease-in-out"
      suppressHydrationWarning
      lang="pt-BR"
    >
      <Script defer data-domain="biomob.org" src="https://plausible.biomob.app/js/script.js" />
      <body className={`${GeistSans.className}`}>
        <WindowSizeProvider>
          <HtmlFontSizeProvider>
            <PaginationProvider>
              <ThemeProvider defaultTheme="dark" attribute="class" enableSystem={false}>
                <div className="header">
                  <BarTools />
                </div>
                <Header />
                <main className="pt-[5rem]">{children}</main>
                <div className="flex justify-center w-full bg-[rgb(var(--var-background-principal))] pt-8"></div>
              </ThemeProvider>
            </PaginationProvider>
          </HtmlFontSizeProvider>
        </WindowSizeProvider>
      </body>
    </html>
  );
}
