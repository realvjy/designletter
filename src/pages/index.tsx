// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <section className="header_section">
        <div className="container">
          <div className="main-title">
            <h1 className="logo"><img src="/designletter-logo.png" className="logomark"/>designletter <span className="detail-text">is a weekly newsletter for designers, developers and managers.</span></h1>
          </div>
          <div className="secondary-text">
            <p>Subscribe to get the latest design resources, articles, research links, tools, as well as inspiration and tips from industry leaders directly to your inbox.</p>
          </div>

          <div className="subscribe-box">
              <div className="form">
                <div id="mc_embed_signup">
                  <form action="https://designletter.us10.list-manage.com/subscribe/post?u=ac670d4650872310b44fc59b4&amp;id=2728fe6fff" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll" className="newsletter">
                      <div className="mc-field-group">
                      	<label for="mce-EMAIL" style={{display:`none`}}>Email Address </label>
                          <div className="inputbox">
                      	   <input type="email" placeholder="Your email address please" name="EMAIL" className="required email" id="mce-EMAIL" />
                          </div>
                      </div>
                      <div className="sub-action">
                        <div id="mce-responses" className="clear">
                        		<div className="response" id="mce-error-response" style={{display:`none`}}></div>
                        		<div clasNames="response" id="mce-success-response" style={{display:`none`}}></div>
                        </div>
                        <div style={{position: `absolute`, left:`-5000px`}}aria-hidden="true">
                          <input type="text" name="b_ac670d4650872310b44fc59b4_2728fe6fff" tabindex="-1" value="" />
                        </div>
                        <div className="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button sub-button" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>


              </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
