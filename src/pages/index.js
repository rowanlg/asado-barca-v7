import React from "react"
import Layout from "../components/Layout"
import "normalize.css"
import HomeSection from "../components/HomeSection"
import MenuJpeg from "../components/MenuJpeg"
import About from "../components/About"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      <MenuJpeg />
      {/* <About /> */}
      <Contact />
    </Layout>
  )
}
