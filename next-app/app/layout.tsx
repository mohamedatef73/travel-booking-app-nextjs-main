import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { AppProps } from "next/app"

interface LayoutProps {
  children: React.ReactNode
}

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Travel",
  description: "GTravel UI/Ux for camping",
}

const Layout: React.FC<LayoutProps> = ({ children }, { Component, pageProps }: AppProps) => {
  return (
    <body>
      <Navbar />
      <Component {...pageProps} />
      {/* <main className="relative overflow-hidden">{children}</main> */}
      <Footer />
    </body>
  )
}

export default Layout

// import Navbar from "../components/Navbar"
// import "./globals.css"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import Footer from "../components/Footer"
// import { AppProps } from "next/app"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Travel",
//   description: "GTravel UI/Ux for camping",
// }

// export default function RootLayout({ Component, pageProps }: AppProps) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         {/* <Component {...pageProps} /> */}
//         <main className="relative overflow-hidden">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }

// pages/_app.js

// import "./globals.css"
// import Navbar from "../components/Navbar"
// import Footer from "../components/Footer"
// import { AppProps } from "next/app"

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <div>
//       <Navbar />
//       <Component {...pageProps} />
//       <Footer />
//     </div>
//   )
// }

// export default MyApp
