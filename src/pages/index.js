import React from "react"
import Layout from "../components/Layout"
import "normalize.css"
import HomeSection from "../components/HomeSection"
import MenuSvg from "../components/MenuSvg"
import About from "../components/About"
import Book from "../components/Book"
import Contact from "../components/Contact"

export default function Home() {
  return (
    <Layout>
      <HomeSection />
      <MenuSvg />
      <About />
      <Book />
      <Contact />
    </Layout>
  )
}
