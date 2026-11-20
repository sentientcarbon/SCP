import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const projects = [
  {
    name: "Web test",
    text: "A small static page with a colour-changing button.",
    href: "https://sentientcarbon.github.io/miniature-couscous/",
  },
]

const IndexPage = () => (
  <Layout>
    <section className="hero">
      <h1>Sentient Carbon</h1>
      <p>Our new website is on its way. Check back soon.</p>
    </section>
    <section className="cards" aria-label="Projects">
      {projects.map(p => (
        <article className="card" key={p.name}>
          <h2>
            <a href={p.href}>{p.name}</a>
          </h2>
          <p>{p.text}</p>
        </article>
      ))}
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => <Seo />
