import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Sponsership extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Designletter | Sponsership" />
        <section className="header_section">
          <div className="container">
            <div className="title-back">
              <a href="/"><img src="/back.svg"/></a><h4>Sponsership</h4>
            </div>
            <div className="sponser-details">
              <p>Designletter is weekly newsletter that contains a list of the best and newest articles resource, job listing and more. It enterily focused on designer, developer and manager.</p>

              <h4>Newsletter Stats</h4>
              <p>
              Email subscribers: 2,146<br/>
              Newsletter open rate: 35%<br/>
              Newsletter click rate: 7%
              </p>
              <p>
              We only run <strong>1 ad per issue</strong> to provide our sponsor with maximum visibility while maintaining the quality of the newsletter. The newsletter is sent out every 7 days on Wednesday. <a href="http://bit.ly/sponsership-issue">Example.</a></p>
‍
<p><a href="https://forms.gle/CdoD7Eqjp8vFNwzC7">Click here</a> to learn more about the pricing and content requirements.</p>
‍
<p>If you have any questions or if you like to book an ad in more than just one issue, please email us on <a href="mailto:vijay@designletter.co?subject=designletter enquiry">vijay@designletter.co</a>
              </p>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="footer-wrap">
              <div className="credit">
                <h4>Designletter, 2021</h4>
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
                <h4>Curated by <a href="http://aakarshna.co/?ref=designletterco" target="__blank">Aakarshna</a> & <a href="https://vijayverma.co/?ref=designletterco" target="__blank">vijay verma</a></h4>
              </div>
            </div>
          </div>
        </footer>
      </Layout>
    )
  }
}
export default Sponsership

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
