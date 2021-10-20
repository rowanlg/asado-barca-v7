import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BgImages from "./BgImages"

const Home = styled.section`
  width: 100vw;
  height: 100vh;
  margin-top: -96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 460px) {
    margin-top: -116px;
  }
  .home-section-link {
    text-decoration: none;
  }
  .link-box {
    border: 3px solid #fafafa;
    color: #fafafa;
    text-align: center;
    padding: 1.4rem 1.2rem 1.2rem 1.2rem;
    font-size: 0.9rem;
    margin: auto;
    opacity: 0;
    transition: all 1s ease;
    @media screen and (min-width: 460px) {
      border: 4px solid #fafafa;
      padding: 1.8rem 1.5rem 1.5rem 1.5rem;
      font-size: 1.2rem;
      width: 300px;
    }
  }
`

const HomeSection = () => {
  const { allContentfulAsadoBarcelona } = useStaticQuery(
    graphql`
      query {
        allContentfulAsadoBarcelona {
          nodes {
            homePageLinkText
            homePageLinkUrl
          }
        }
      }
    `
  )
  const { homePageLinkText, homePageLinkUrl } =
    allContentfulAsadoBarcelona.nodes[0]

  const [show, setShow] = useState(false)
  const [render, setRender] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setRender(true)
      const timer2 = setTimeout(() => {
        setShow(true)
      }, 200)
    }, 500)
    return () => {
      clearTimeout(timer)
    }
  }, [show])

  return (
    <BgImages imgId={0}>
      <Home>
        <a
          href={homePageLinkUrl}
          target="_blank"
          rel="noreferrer"
          className="home-section-link"
        >
          {render && (
            <div className="link-box" style={show && { opacity: "100%" }}>
              {homePageLinkText}
            </div>
          )}
          {/* {show && <div className="link-box">{homePageLinkText}</div>} */}
        </a>
      </Home>
    </BgImages>
  )
}

export default HomeSection
