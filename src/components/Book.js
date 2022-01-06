import React from "react"
import { useEffect, useState, useRef, createRef } from "react"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin: 1rem 0;
    width: 90vw;
    max-width: 540px;
    height: 640px;
    display: flex;
    border-radius: 3px;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
`

const Book = () => {
  const [render, setRender] = useState(false)

  const container = createRef()

  useEffect(() => {
    const iframeObserver = new IntersectionObserver(onIframeIntersection, {
      rootMargin: "100px 0px",
      threshold: 0.25,
    })
    if (window && "IntersectionObserver" in window) {
      if (container && container.current) {
        iframeObserver.observe(container.current)
      }
    } else {
      setRender(true)
    }

    function onIframeIntersection(entries) {
      if (!entries || entries.length <= 0) {
        return
      }

      if (entries[0].isIntersecting) {
        setRender(true)
        iframeObserver.disconnect()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container])

  const ThirdPartyIframe = () => {
    return (
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
      />
    )
  }

  return (
    <Section id="book">
      <div className="reservation-section" ref={container}>
        {render && <ThirdPartyIframe />}
      </div>
    </Section>
  )
}

export default Book
