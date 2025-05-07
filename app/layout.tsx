import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import SplashScreen from "@/components/splash-screen"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Proconnect | Next-Generation Professional Ecosystem",
  description: "A dynamic, action-oriented hub where professionals build, grow, and prove their expertise",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
            <SplashScreen />
            <Navigation />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
