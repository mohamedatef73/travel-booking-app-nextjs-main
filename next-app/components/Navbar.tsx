"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="flexBetween max-container padding-container z-30 py-5">
      <Link href="/">
        <Image src="/ccg.png" alt="logo" width={200} height={29} />
      </Link>
      <ul className={`lg:flex ${isMenuOpen ? "block" : "hidden"} h-full gap-12`}>
        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
          <Link href="/porcelain">porcelain</Link>
        </li>
        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
          <Link href="/porcelainProducts">ceramic</Link>
        </li>
        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
          <Link href="/Movies">Movies</Link>
        </li>
        <li className="regular-16 text-gray-50 flexCenter cursor-pointer pb1.5 transition-all hover:font-bold">
          <Link href="/">floor</Link>
        </li>
      </ul>
      <div className="lg:flexCenter hidden">
        <Button type="button" title="تسوق المنتجات" icon="/cart.png" variant="btn_dark_green" />
      </div>
      <Image
        alt="menu"
        src="/menu.svg"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-white z-40 transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center h-full gap-6">
          <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
            <Link href="/porcelain">porcelain</Link>
          </li>
          <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
            <Link href="/porcelainProducts">ceramic</Link>
          </li>
          <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
            <Link href="/Movies">Movies</Link>
          </li>
          <li className="text-gray-800 text-lg cursor-pointer" onClick={toggleMenu}>
            <Link href="/">floor</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
