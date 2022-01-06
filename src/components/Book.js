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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
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
      {/* <iframe
        src="https://booking.resdiary.com/widget/Standard/Asado5/30856"
        allowtransparency="true"
        frameborder="0"
        style={{
          width: "75%",
          border: "none",
          maxWidth: "540px",
          height: "640px",
        }}
      ></iframe> */}
      <div className="reservation-section" ref={container}>
        {render && <ThirdPartyIframe />}
      </div>

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
