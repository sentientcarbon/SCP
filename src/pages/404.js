import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <section className="hero">
      <h1>Page not found</h1>
      <p>
        That page doesn't exist. <Link to="/">Go to the home page</Link>.
      </p>
    </section>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="Page not found" />
