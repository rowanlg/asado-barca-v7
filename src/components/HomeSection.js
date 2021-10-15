import React from "react"
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
    border: 4px solid #fafafa;
    color: #fafafa;
    text-align: center;
    padding: 1.2rem 1.2rem;
    font-size: 0.9rem;
    margin: auto;
    @media screen and (min-width: 460px) {
      padding: 1.5rem;
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

  console.log(allContentfulAsadoBarcelona.nodes[0])
  return (
    <BgImages imgId={0}>
      <Home>
        <a href={homePageLinkUrl} target="_blank" className="home-section-link">
          <div className="link-box">{homePageLinkText}</div>
        </a>
      </Home>
    </BgImages>
  )
}

export default HomeSection
