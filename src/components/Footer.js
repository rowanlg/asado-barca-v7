import React from "react"
import styled from "styled-components"
import { FiInstagram } from "react-icons/fi"

const FooterSection = styled.section`
  max-width: 900px;
  margin: auto;
  margin-top: -4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    margin: 0 1rem 1rem 1rem;
    color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-decoration: none;
    font-size: 0.9rem;
    cursor: pointer;
    z-index: 110;
    svg {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      color: #fafafa !important;
    }
    :hover {
      color: #f2b850;
    }
  }
`

const Footer = () => {
  return (
    <FooterSection>
      <a
        href="https://www.instagram.com/asadobcn/?hl=es"
        target="_blank"
        rel="noreferrer"
        data-no-translation
      >
        <FiInstagram />
        asadobcn
      </a>
      <a
        href="https://www.instagram.com/asadoburgers/?hl=es"
        target="_blank"
        rel="noreferrer"
        data-no-translation
      >
        <FiInstagram />
        asadoburgers
      </a>
    </FooterSection>
  )
}

export default Footer
