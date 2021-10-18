import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BgImages from "./BgImages"

const query = graphql`
  {
    allContentfulAsadoBarcelona {
      nodes {
        menuImagesSvg {
          file {
            url
          }
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
  .svg-img {
    background-color: white;
    max-width: 900px;
    width: 90vw;
    margin: 1rem;
  }
`

const MenuSvg = () => {
  const menuImagesData = useStaticQuery(query)
  const { menuImagesSvg } = menuImagesData.allContentfulAsadoBarcelona.nodes[0]
  return (
    <BgImages imgId={1}>
      <MenuSection id="menu">
        {menuImagesSvg.map((image, index) => {
          return (
            <img
              src={image.file.url}
              key={index}
              className="svg-img"
              alt={`Menu ${index + 1}`}
            />
          )
        })}
      </MenuSection>
    </BgImages>
  )
}

export default MenuSvg
