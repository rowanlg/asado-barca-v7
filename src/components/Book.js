import React from "react"
import { useEffect, useState, useRef } from "react"
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

// Hook
function useOnScreen(ref, rootMargin = "0px") {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting)
      },
      {
        rootMargin,
      }
    )
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount
  return isIntersecting
}

const Book = () => {
  const ref = useRef()
  const onScreen = useOnScreen(ref, "0px")

  // useEffect(() => {
  //   const scriptTag = document.createElement("script")

  //   scriptTag.src =
  //     "//www.opentable.com/widget/reservation/loader?rid=237078&type=standard&theme=standard&iframe=true&domain=com&lang=es-MX&newtab=false&ot_source=Restaurant%20website"
  //   scriptTag.async = true

  //   document.getElementById("open-table").appendChild(scriptTag)
  //   return () => {
  //     document.getElementById("open-table").removeChild(scriptTag)
  //   }
  // }, [])

  return (
    <BgImages imgId={0}>
      <Section id="book" ref={ref}>
        {/* <div id="open-table" />  */}
        {onScreen ? (
          <script
            type="text/javascript"
            src="//www.opentable.com/widget/reservation/loader?rid=237078&type=standard&theme=standard&iframe=true&domain=com&lang=es-MX&newtab=false&ot_source=Restaurant%20website"
          ></script>
        ) : (
          <script />
        )}
      </Section>
    </BgImages>
  )
}

export default Book
