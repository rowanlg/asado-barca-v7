import React from "react"
import { useEffect } from "react"
import styled from "styled-components"
import BgImages from "./BgImages"

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

const Book = () => {
  useEffect(() => {
    const scriptTag = document.createElement("script")

    scriptTag.src =
      "//www.opentable.com/widget/reservation/loader?rid=237078&type=standard&theme=standard&iframe=true&domain=com&lang=es-MX&newtab=false&ot_source=Restaurant%20website"
    scriptTag.async = true

    document.getElementById("open-table").appendChild(scriptTag)
    return () => {
      document.getElementById("open-table").removeChild(scriptTag)
    }
  }, [])
  return (
    <BgImages imgId={0}>
      <Section>
        <div id="open-table" />
      </Section>
    </BgImages>
  )
}

export default Book
