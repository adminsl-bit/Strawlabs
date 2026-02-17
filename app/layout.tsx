import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Header } from "@/components/header"
import { GsapProvider } from "@/components/gsap-provider"
import { GrainOverlay } from "@/components/grain-overlay"
import { CustomCursor } from "@/components/custom-cursor"
import { Footer } from "@/components/footer"
import { TransitionProvider, PageTransitionWrapper } from "@/components/transition-provider"

export const metadata: Metadata = {
  title: {
    default: "S.T.R.A.W. Labs | From Concept to Clarity",
    template: "%s | S.T.R.A.W. Labs"
  },
  description: "AI consulting and solutions - transforming complex AI concepts into clear, actionable business strategies. Specialists in AI Strategy, Intelligent Automation, and Custom AI Solutions.",
  keywords: ["AI Consulting", "Artificial Intelligence", "AI Strategy", "Machine Learning", "Intelligent Automation", "Straw Labs", "S.T.R.A.W. Labs"],
  authors: [{ name: "S.T.R.A.W. Labs" }],
  creator: "S.T.R.A.W. Labs",
  publisher: "S.T.R.A.W. Labs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://strawlabs.com",
    title: "S.T.R.A.W. Labs | From Concept to Clarity",
    description: "AI consulting and solutions - transforming complex AI concepts into clear, actionable business strategies.",
    siteName: "S.T.R.A.W. Labs",
    images: [
      {
        url: "/images/og-image.png", // Recommended size: 1200x630
        width: 1200,
        height: 630,
        alt: "S.T.R.A.W. Labs - AI Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.T.R.A.W. Labs | From Concept to Clarity",
    description: "AI consulting and solutions - transforming complex AI concepts into clear, actionable business strategies.",
    images: ["/images/og-image.png"],
    creator: "@strawlabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-dark-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
    ],
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <body className="bg-black text-foreground antialiased selection:bg-primary selection:text-primary-foreground font-sans" suppressHydrationWarning>
        <CustomCursor />
        <GrainOverlay />
        <GsapProvider>
          <TransitionProvider>
            <Header />
            <PageTransitionWrapper>
              <main>{children}</main>
            </PageTransitionWrapper>
          </TransitionProvider>
        </GsapProvider>
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-0 overflow-hidden">
          <svg>
            <filter id="grainy">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" />
            </filter>
          </svg>
        </div>
        <div id="modal-root" className="relative z-[99999]" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Straw Labs",
              "alternateName": "S.T.R.A.W. Labs",
              "description": "Premium AI Consulting & Solutions agency specializing in AI Strategy, Intelligent Automation, and Custom AI Solutions.",
              "url": "https://strawlabs.com",
              "keywords": "AI Consulting, Intelligent Automation, Custom AI Solutions, AI Strategy",
              "logo": "https://strawlabs.com/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "18, Arul Malar Convent Street, KK Nagar",
                "addressLocality": "Madurai",
                "postalCode": "625020",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-97917-43010",
                "contactType": "customer service",
                "email": "hello@strawlabs.in",
                "availableLanguage": ["en"]
              },
              "sameAs": [
                "https://www.linkedin.com/company/straw-labs"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}
