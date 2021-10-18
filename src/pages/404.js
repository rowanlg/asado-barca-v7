import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/Layout"

const ErrorWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 8rem;
  a {
    text-decoration: none;
    color: #f2b850;
  }
`

const ErrorPage = () => {
  return (
    <Layout>
      <ErrorWrapper>
        <h2>Woah, this page does not exist!</h2>
        <Link to="/">Click here to get back to safety!</Link>
      </ErrorWrapper>
    </Layout>
  )
}

export default ErrorPage
