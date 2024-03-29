import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BgImages from "./BgImages"
import Book from "./Book"

const query = graphql`
  {
    allContentfulAsadoBarcelona {
      nodes {
        about {
          about
        }
      }
    }
  }
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 900px;
  padding: 2rem 0;
  a {
    border: 2px solid #fafafa;
    padding: 15px 18px 12px 18px;
    border-radius: 3px;
    text-decoration: none;
    color: #fafafa;
    :hover {
      background-color: #000;
    }
  }
  div {
    margin: 2rem 0;
    max-width: 90vw;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .divider {
      width: 30vw;
      border-top: 2px solid #fafafa;
      margin: 0rem auto 0.5rem;
    }
    @media screen and (min-width: 992px) {
      max-width: 900px;
    }
  }
`

const About = () => {
  const aboutData = useStaticQuery(query)
  const aboutText = aboutData.allContentfulAsadoBarcelona.nodes[0].about.about
  return (
    <BgImages imgId={2}>
      <Section id="about">
        <div>
          <h2>Reservar una Mesa</h2>
          <Book />
          {/* <div className="divider"></div> */}
          <p>{aboutText}</p>
        </div>
        {/* <a
          href=" https://module.lafourchette.com/es_ES/module/716072-20c2d "
          target="_blank"
          rel="noopener"
        >
          Reserva una mesa
        </a> */}
      </Section>
    </BgImages>
  )
}

export default About
