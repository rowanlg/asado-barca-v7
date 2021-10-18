import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { getImage } from "gatsby-plugin-image"

import { convertToBgImage } from "gbimage-bridge"
import BackgroundImage from "gatsby-background-image"

const StyledBg = styled(BackgroundImage)`
  &::before,
  &::after {
    filter: brightness(60%);
  }
  img {
    z-index: -100;
  }
`

const BgImages = ({ imgId, children }) => {
  const bgImageData = useStaticQuery(
    graphql`
      query {
        allContentfulAsadoBarcelona {
          nodes {
            backgroundImages {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
      }
    `
  )
  const bkgImage =
    bgImageData.allContentfulAsadoBarcelona.nodes[0].backgroundImages[imgId]
  const image = getImage(bkgImage)
  const bgImage = convertToBgImage(image)

  return (
    <StyledBg
      Tag="section"
      // Spread bgImage into BackgroundImage:
      {...bgImage}
      preserveStackingContext
    >
      {children}
    </StyledBg>
  )
}

export default BgImages
