import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/Layout"
import ClientPage1 from "../components/Client1"
import Default from "../components/DefaultClient"


const NotFound=()=>(
  <h1>Sorry, no page found!</h1>
)
const App = () => {
  return (
    <Layout>
      <Router basepath="/app">
        <ClientPage1 path="/beedu" />
        <Default path="/" />
        <NotFound default />
      </Router>
    </Layout>
  )
}

export default App