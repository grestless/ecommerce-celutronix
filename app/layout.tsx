import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import "./scroll-animations.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ErrorBoundary } from "@/components/error-boundary"
import { ToastProvider } from "@/components/toast-provider"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Moonparet - Moda Urbana Minimalista",
    template: "%s | Moonparet",
  },
  description:
    "Descubre nuestra colección de ropa urbana minimalista. Calzado, remeras, pantalones y accesorios con estilo único.",
  keywords: ["moda", "ropa urbana", "minimalista", "calzado", "remeras", "pantalones", "accesorios", "argentina", "moonparet"],
  authors: [{ name: "Moonparet" }],
  creator: "Moonparet",
  publisher: "Moonparet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://moonparet.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Moonparet - Moda Urbana Minimalista",
    description: "Descubre nuestra colección de ropa urbana minimalista con estilo único.",
    url: "https://moonparet.vercel.app/",
    siteName: "Moonparet",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Moonparet",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moonparet - Moda Urbana Minimalista",
    description: "Descubre nuestra colección de ropa urbana minimalista.",
    creator: "@moonparet",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
          storageKey="moonparet-theme"
        >
          <ErrorBoundary>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <ToastProvider />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  )
}
