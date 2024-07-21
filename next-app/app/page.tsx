import Camp from "../components/Camp"
import Guid from "../components/Guid"
import GetApp from "../components/GetApp"
import Features from "../components/Features"
import Heros from "../components/Heros"
import Carousel from "../components/Carousel"
import { Router } from "next/router"

export default function Home() {
  return (
    <>
      <Heros />
      <Camp />
      <Carousel />
      <Guid />
      {/* <GetApp />
      <Features /> */}
    </>
  )
}
