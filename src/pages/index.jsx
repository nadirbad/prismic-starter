import React from "react"
import { graphql } from "gatsby"

const Index = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage

  return (
    <React.Fragment>
      <h1>{data.title.text}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
    </React.Fragment>
  )
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    prismicHomepage {
      data {
        title {
          text
        }
        content {
          html
        }
      }
    }
  }
`
