import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FiMenu, FiX } from "react-icons/fi"
import Logo from "../assets/images/2023-logo-cream.png"

const Header = styled.header`
  width: 100vw;
  font-family: "BebasNeue";
  .asado-img-link {
    z-index: 98;
  }
  img {
    margin-top: 2rem;
    z-index: 98;
    width: 120px;
    @media screen and (min-width: 460px) {
      width: 150px;
    }
  }
  .nav-container {
    margin: auto;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media screen and (min-width: 992px) {
      width: 900px;
    }
  }
  .drop-menu-icon {
    font-size: 2.8rem;
    color: #fafafa;
    margin: auto 0;
    cursor: pointer;
    z-index: 100;
    position: relative;
    top: 12px;
    @media screen and (min-width: 460px) {
      font-size: 3rem;
    }
    @media screen and (min-width: 992px) {
      display: none;
    }
  }
  .hide-menu-icon {
    display: none;
  }
  .close-menu-icon {
    font-size: 2.8rem;
    color: #fafafa;
    cursor: pointer;
    display: none;
    position: fixed;
    right: 5vw;
    top: 25px;
    @media screen and (min-width: 460px) {
      font-size: 3rem;
      top: 35px;
    }
  }
  .show-close-icon {
    display: inline;
    z-index: 100;
  }
  .menu-links {
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    top: 0;
    right: -100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    z-index: 99;
    a {
      text-decoration: none;
      color: #fafafa;
      font-size: 2rem;
      margin: 0.3rem;
      :hover {
        color: #f2b850;
      }
    }
  }
  .show-menu {
    right: 0;
  }
  .desktop-links {
    display: none;
    margin: auto 0;
    z-index: 100;
    a {
      text-decoration: none;
      color: #fafafa;
      font-size: 1.5rem;
      margin: 0.7rem;
      cursor: pointer;
      :hover {
        color: #f2b850;
      }
    }
    @media screen and (min-width: 992px) {
      display: inline;
    }
  }
`

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <Header>
      <div className="nav-container">
        <Link to="/" className="asado-img-link">
          <img src={Logo} alt="Asado Barcelona Logo" />
        </Link>
        <FiMenu
          className={showLinks ? "hide-menu-icon" : "drop-menu-icon"}
          onClick={() => {
            setShowLinks(!showLinks)
          }}
        />
        <FiX
          className={
            showLinks ? "close-menu-icon show-close-icon" : "close-menu-icon"
          }
          onClick={() => {
            setShowLinks(false)
          }}
        />
        <div className="desktop-links">
          <a href="/#menu" translate="no" class="notranslate">
            Menu
          </a>
          <a href="/#contact" translate="no" class="notranslate">
            Reservar
          </a>
          <a
            href="https://www.ubereats.com/es/store/asado-burger/XXyA6teISKeaOd0x5tBX5Q?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJTMzIlMjA0SlQlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKdVlkcVEtQ1FjVWdSdm1KSVBueEg4V00lMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTEuNTQ4ODQzNiUyQyUyMmxvbmdpdHVkZSUyMiUzQS0yLjU1MjgwNDYlN0Q%3D"
            target="_blank"
            rel="noreferrer"
            translate="no"
            class="notranslate"
          >
            Entrega
          </a>
          <a href="/#contact" translate="no" class="notranslate">
            Contacto
          </a>
        </div>
      </div>
      <div
        className={showLinks ? "menu-links show-menu" : "menu-links"}
        onClick={() => {
          setShowLinks(false)
        }}
      >
        <a href="/#menu" class="notranslate">
          Menu
        </a>
        <a href="/#contact" translate="no" class="notranslate">
          Reservar
        </a>
        <a
          href="https://www.ubereats.com/es/store/asado-burger/XXyA6teISKeaOd0x5tBX5Q?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMkJTMzIlMjA0SlQlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKdVlkcVEtQ1FjVWdSdm1KSVBueEg4V00lMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTEuNTQ4ODQzNiUyQyUyMmxvbmdpdHVkZSUyMiUzQS0yLjU1MjgwNDYlN0Q%3D"
          target="_blank"
          rel="noreferrer"
          translate="no"
          class="notranslate"
        >
          Entrega
        </a>
        <a href="/#contact" translate="no" class="notranslate">
          Contacto
        </a>
      </div>
    </Header>
  )
}

export default Navbar
