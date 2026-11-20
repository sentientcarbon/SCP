import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Seo = ({ title, description }) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const meta = site.siteMetadata
  const fullTitle = title ? `${title} | ${meta.title}` : meta.title
  const desc = description || meta.description
  return (
    <>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}

export default Seo
