import React, { createRef, useState, useEffect } from "react"
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
  padding: 6rem 0;
  @media screen and (min-width: 992px) {
    flex-direction: row;
    div {
      margin: 1rem;
    }
  }
  .map-section {
    width: 90vw;
    height: 70vw;
    max-width: 400px;
    max-height: 300px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
    iframe {
      width: 90vw;
      height: 70vw;
      max-width: 400px;
      max-height: 300px;
      border-radius: 3px;
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

  .reserve-button {
    padding: 1.4rem 1.2rem 1.2rem 1.2rem;
    border: 3px solid #fafafa;
    color: #fafafa;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .map-container {
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Contact = () => {
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

  const AsadoDiagonalMap = () => {
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

  const AsadoSantJoanMap = () => {
    return (
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d324.43706073176776!2d2.1736634061879823!3d41.3969686741472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a357b4df9297%3A0xe4360c237ecb5ad5!2sAsado%20Burgers!5e0!3m2!1sen!2suk!4v1699299281716!5m2!1sen!2suk"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="Location"
      />
    )
  }

  return (
    <BgImages imgId={3}>
      <Section id="contact">
        <div className="map-container">
          <div className="map-section" id="google-map" ref={container}>
            {render && <AsadoDiagonalMap />}
          </div>
          <div className="info" translate="no" class="notranslate">
            <h2>Asado Diagonal</h2>
            <p>Passatge de Lluís Pellicer, 12, 08036 Barcelona, Spain</p>
            <p>+34 934 19 65 90</p>
          </div>
          <div
            className="reserve-button"
            onClick={() =>
              window.open(
                "https://reservation.dish.co/widget/hydra-1ff55e9d-3583-4444-bebe-f6f018b6470c",
                "_blank"
              )
            }
          >
            Reservar una Mesa
          </div>
        </div>
        <div className="map-container">
          <div className="map-section" id="google-map" ref={container}>
            {render && <AsadoSantJoanMap />}
          </div>
          <div className="info" translate="no" class="notranslate">
            <h2>Asado Passeig de Sant Joan</h2>
            <p>C/ del Consell de Cent, 414, 08009 Barcelona, Spain</p>
            <p>+34 934 19 65 90</p>
          </div>
          <div
            className="reserve-button"
            onClick={() =>
              window.open(
                "https://reservation.dish.co/widget/hydra-09f6ee7b-c434-42a2-9353-042ceaf18f21",
                "_blank"
              )
            }
          >
            Reservar una Mesa
          </div>
        </div>
      </Section>
    </BgImages>
  )
}

export default Contact
