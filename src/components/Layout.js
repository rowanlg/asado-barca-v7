import React from "react"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"
import Navbar from "./Navbar"

const Main = styled.main``

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyles />
      <Navbar />
      {children}
    </Main>
  )
}

export default Layout
