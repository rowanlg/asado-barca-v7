import React from "react"
import styled from "styled-components"
import GlobalStyles from "./GlobalStyles"

const Main = styled.main``

const Layout = ({ children }) => {
  return (
    <Main>
      <GlobalStyles />
      {children}
    </Main>
  )
}

export default Layout
