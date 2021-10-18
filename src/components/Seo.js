import React from "react"
import { Helmet } from "react-helmet"
import ImageCard from "../assets/images/image-card.jpg"

const Seo = () => {
  return (
    <Helmet>
      <title>Asado Barcelona | Asado Burgers | Barcelona | Hamburguesas</title>
      <html lang="es" />
      <meta
        name="description"
        content="Asado Barcelona es el restaurante de hamburguesas gastrónomo más nuevo de Barcelona, ​​que sirve las mejores hamburguesas, con platos pequeños y cervezas."
      />
      <meta name="image" content={ImageCard} />
      <link rel="canonical" href="https://www.asadobarcelona.com/" />
    </Helmet>
  )
}

export default Seo
