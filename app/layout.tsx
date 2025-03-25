import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { siteConfig } from "@/lib/site-config";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  keywords: [
    "Irvan",
    "Irvan Pramana",
    "Pramana",
    "Irvan Pramana Putra",
    "Irvan Dev",
    "0xIrvan",
    "Web Developer",
    "Software Engineer",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
  ],
  robots: "index, follow",
  applicationName: siteConfig.title,
  authors: [{ name: "Irvan Pramana Putra" }],
  creator: "Irvan Pramana Putra",
  publisher: "Irvan Pramana Putra",
  openGraph: {
    type: "website",
    url: "https://irvn.dev",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: "https://irvn.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@irvanpramanapu2",
    creator: "@irvanpramanapu2",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["https://irvn.dev/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistMono.variable} font-sans antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-10 lg:mb-40`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-4 md:px-6 max-w-[630px] w-full mx-auto">
            <Navbar />
            {children}
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
