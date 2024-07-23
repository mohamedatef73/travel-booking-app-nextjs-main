"use client"
import Navbar from "../components/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "../components/Footer"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"
import { Url } from "next/dist/shared/lib/router/router"
import Head from "next/head"
// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Travel",
//   description: "GTravel UI/Ux for camping",
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="relative overflow-hidden">{children}</main>
      <Footer />
    </div>
  )
}
