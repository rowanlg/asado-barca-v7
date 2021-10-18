import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import BgImages from "./BgImages"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 900px;
  max-width: 900px;
  margin: auto;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    div {
      margin: 2rem;
    }
  }
  .map-section {
    iframe {
      width: 90vw;
      height: 70vw;
      max-width: 400px;
      max-height: 300px;
    }
  }
  .info {
    margin-top: 2rem;
    max-width: 400px;
    width: 90vw;
    @media screen and (min-width: 992px) {
      width: 400px;
    }
    h2 {
      margin-bottom: -0.5rem;
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

const Contact = () => {
  const ThirdPartyIframe = () => {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.125441596119!2d2.147384715425964!3d41.39308207926357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a32519083271%3A0xbac256f23168a4d6!2sAsado%20Hamburguesas!5e0!3m2!1sen!2snl!4v1634480436040!5m2!1sen!2snl"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="Location"
      />
    )
  }

  const ref = useRef()
  const onScreen = useOnScreen(ref, "0px")

  return (
    <BgImages imgId={1}>
      <Section id="contact">
        <div className="map-section" id="google-map" ref={ref}>
          {onScreen ? <ThirdPartyIframe /> : <div />}
        </div>
        <div className="info">
          <h2>Asado Barcelona</h2>
          <p>Passatge de Lluís Pellicer, 12, 08036 Barcelona, Spain</p>
          <p>+34 934 19 65 90</p>
        </div>
      </Section>
    </BgImages>
  )
}

export default Contact
