import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BgImages from "./BgImages"

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
  div {
    margin: 2rem 0;
    max-width: 90vw;
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
          <p>{aboutText}</p>
        </div>
      </Section>
    </BgImages>
  )
}

export default About
