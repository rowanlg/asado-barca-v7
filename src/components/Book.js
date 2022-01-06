import React from "react"
import { useEffect, useState, useRef } from "react"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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

  //   scriptTag.src = "https://booking.resdiary.com/bundles/WidgetV2Loader.js"
  //   scriptTag.async = true

  //   document.getElementById("rd-widget-frame").appendChild(scriptTag)
  //   return () => {
  //     document.getElementById("rd-widget-frame").removeChild(scriptTag)
  //   }
  // }, [])

  return (
    <Section id="book" ref={ref}>
      {/* <div id="open-table" />
      <div id="rd-widget-frame" style={{ maxWidth: "600px", margin: "auto" }} /> */}
      {/* <>
          <input
            id="rdwidgeturl"
            name="rdwidgeturl"
            value="https://booking.resdiary.com/widget/Standard/Asado5/30856?includeJquery=false"
            type="hidden"
          />
          <script
            type="text/javascript"
            src="https://booking.resdiary.com/bundles/WidgetV2Loader.js"
          ></script>
          <scripts
            type="text/javascript"
            src="//www.opentable.com/widget/reservation/loader?rid=237078&type=standard&theme=standard&iframe=true&domain=com&lang=es-MX&newtab=false&ot_source=Restaurant%20website"
          ></scripts>
        </> */}
      <iframe
        src="https://booking.resdiary.com/widget/Standard/Asado5/30856"
        allowtransparency="true"
        frameborder="0"
        style={{
          width: "100%",
          border: "none",
          maxWidth: "540px",
          height: "640px",
        }}
      ></iframe>

      {/* {onScreen ? (
        <iframe
          src="https://booking.resdiary.com/widget/Standard/Asado5/30856"
          allowtransparency="true"
          frameborder="0"
          style={{
            width: "100%",
            border: "none",
            maxWidth: "540px",
            height: "640px",
          }}
        ></iframe>
      ) : (
        <iframe />
      )} */}
    </Section>
  )
}

export default Book
