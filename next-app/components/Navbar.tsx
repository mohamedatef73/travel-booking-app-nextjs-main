import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween  max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/ccg.png" alt="logo" width={200} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb1.5 transition-all hover:font-bold"
            href={link.href}
            key={link.key}
          >
            {link.label}
          </Link>
        ))}
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
