import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import BgImages from "./BgImages"

const query = graphql`
  {
    allContentfulAsadoBarcelona {
      nodes {
        menuImages {
          gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
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
  .menu-image {
    max-width: 900px;
    margin: 1rem 1rem 0 1rem;
  }
`

const Menu = () => {
  const menuImagesData = useStaticQuery(query)
  const { menuImages } = menuImagesData.allContentfulAsadoBarcelona.nodes[0]
  return (
    <BgImages imgId={1}>
      <MenuSection id="menu">
        {menuImages.map((image, index) => {
          return (
            <GatsbyImage
              image={image.gatsbyImageData}
              key={index}
              alt={`Menu Item #${index + 1}`}
              className="menu-image"
            />
          )
        })}
      </MenuSection>
    </BgImages>
  )
}

export default Menu
