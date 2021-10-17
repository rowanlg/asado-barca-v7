import React from "react"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"
import Navbar from "./Navbar"
import Preloader from "./Preloader"
import "../assets/css/typography.css"

const Main = styled.main``

const Layout = ({ children }) => {
  return (
    <Main>
      <Preloader />
      <GlobalStyles />
      <Navbar />
      {children}
    </Main>
  )
}

export default Layout
