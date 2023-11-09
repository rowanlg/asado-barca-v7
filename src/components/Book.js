import React from "react"
import { useEffect, useState, useRef, createRef } from "react"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .reservationWidgetContainer {
    font-family: "BebasNeue";
  }

  .widgets {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 656px) {
      flex-direction: row;
    }
  }

  .reservation-section {
    margin: 1rem 0;
    padding: 1rem;
    width: 90vw;
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
      <div className="widgets">
        <iframe
          src="https://reservation.dish.co/widget/hydra-1ff55e9d-3583-4444-bebe-f6f018b6470c"
          allowtransparency="true"
          frameborder="0"
          style={{
            width: "100%",
            border: "none",
            maxWidth: "540px",
            height: "500px",
          }}
        />
        <iframe
          src="https://reservation.dish.co/widget/hydra-09f6ee7b-c434-42a2-9353-042ceaf18f21"
          allowtransparency="true"
          frameborder="0"
          style={{
            width: "100%",
            border: "none",
            maxWidth: "540px",
            height: "500px",
          }}
        />
      </div>
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
