import React from "react"
import styled from "styled-components"

const PreloaderWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  z-index: 150;
  background-color: black;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: top 1s ease !important;
  top: 0;
`

const Preloader = () => {
  return (
    <PreloaderWrapper id="loader-wrapper">
      <h2>Loading</h2>
    </PreloaderWrapper>
  )
}

export default Preloader
