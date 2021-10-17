import React from "react"
import Layout from "../components/Layout"
import "normalize.css"
import HomeSection from "../components/HomeSection"
// import Menu from "../components/Menu"
import MenuSvg from "../components/MenuSvg"
import About from "../components/About"

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      {/* <Menu /> */}
      <MenuSvg />
      <About />
    </Layout>
  )
}
