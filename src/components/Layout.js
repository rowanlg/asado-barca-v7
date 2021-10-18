import React from "react"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../assets/css/typography.css"

const Main = styled.main``

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyles />
      <Navbar />
      {children}
      <Footer />
    </Main>
  )
}

export default Layout
