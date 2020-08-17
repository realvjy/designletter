import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Archive extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Designletter | Arhcive" />
        <section className="header_section">
          <div className="container">
            <div className="title-back">
              <a href="/"><img src="/back.svg"/></a><h4>Arcihve</h4>
            </div>
            <div className="latest-issue">
              {posts.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                const date = node.frontmatter.date
                const link = node.frontmatter.mailchimp_link
                return (

                  <div className="mock-wrap">
                    <a href={link} className="issue-box">
                      <h2>{title}</h2>
                      <h5>{date}</h5>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="footer-wrap">
              <div className="credit">
                <h4>Designletter, 2020</h4>
                <ul className="menu-social">
                    <li>
                      <a href="https://instagram.com/designletterco" target="__blank"><img src="/insta.svg"/></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/designletterco" target="__blank"><img src="/twitter.svg"/></a>
                    </li>
                </ul>
              </div>
              <div className="quote">
                <h4>Curated by <a href="https://vijayverma.co/?ref=designletterco" target="__blank">vijay verma</a> & <a href="http://aakarshna.co/?ref=designletterco" target="__blank">Aakarshna</a></h4>
              </div>
            </div>
          </div>
        </footer>
      </Layout>
    )
  }
}
export default Archive

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt(format: HTML)
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD, YYYY")
            title
            description
            author
            category
            mailchimp_link
          }
        }
      }
    }
  }
`
