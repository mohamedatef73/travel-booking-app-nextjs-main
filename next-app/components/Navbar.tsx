import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "../constants"
import Button from "./Button"

const Navbar = ({ onNavigate }) => {
  return (
    <nav className="flexBetween  max-container padding-container  z-30 py-5">
      <Link href="/">
        <Image src="/ccg.png" alt="logo" width={200} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex ">
        <li onClick={() => onNavigate("/porcelain")}> porcelain</li>
        <li onClick={() => onNavigate("/ceramic")}> ceramic</li>
        <li onClick={() => onNavigate("/porcelainProducts")}> xxxl</li>
        <li onClick={() => onNavigate("/porcelain")}> liesier</li>

        {/* <Link
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb1.5 transition-all hover:font-bold"
          href="/porcelain"
        >
          البورسلين
        </Link>
        <Link
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb1.5 transition-all hover:font-bold"
          href="/porcelainProducts"
        >
          السيراميك
        </Link>
        <Link
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb1.5 transition-all hover:font-bold"
          href="/porcelain"
        >
          البلاط
        </Link>
        <Link
          className="regular-16 text-gray-50 flexCenter cursor-pointer pb1.5 transition-all hover:font-bold"
          href="/porcelain"
        >
          الرخام
        </Link> */}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button type="button" title="تسوق المنتجات" icon="/cart.png" variant="btn_dark_green" />
      </div>
      <Image
        alt="menu"
        src="menu.svg"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  )
}

export default Navbar
