import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import BgImages from "./BgImages"

const query = graphql`
  {
    allContentfulAsadoBarcelona {
      nodes {
        menuImagesSvg {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

const MenuSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5vh;
  padding-bottom: 5vh;
  .menu-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    .svg-img {
      /* background-color: white; */
      /* position: relative; */
      max-width: 900px;
      width: 90vw;
      /* margin: 1rem; */
    }
  }
`

const MenuJpeg = () => {
  const menuImagesData = useStaticQuery(query)
  const { menuImagesSvg } = menuImagesData.allContentfulAsadoBarcelona.nodes[0]
  return (
    <BgImages imgId={1}>
      <MenuSection id="menu">
        {menuImagesSvg.map((image, index) => {
          return (
            <div className="menu-container">
              <GatsbyImage
                image={image.gatsbyImageData}
                alt={`Menu ${index}`}
                className="svg-img"
              />
            </div>
          )
        })}
      </MenuSection>
    </BgImages>
  )
}

export default MenuJpeg
