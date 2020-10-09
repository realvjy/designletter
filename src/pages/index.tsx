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
      <SEO title="Designletter - A weekly newsletter for humans" />
      <section className="header_section">
        <div className="container">
          <div className="main-title">
            <h1 className="logo"><img src="/designletter-logo.png" className="logomark"/><div className="title-text">designletter <span className="detail-text">is a weekly newsletter for everyone</span></div></h1>
          </div>
          <div className="secondary-text">
            <p>Subscribe to get your dose of design inspiration, latest resources, articles, research links, tools, and the coolest tips from industry leaders; directly in your inbox.</p>
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

              <div className="social-p">
                <p>Join 1900+ members and get updated weekly</p>
              </div>
          </div>
          <div className="latest-issue">
            <a href="http://bit.ly/designletter-14" className="issue-box">
              <h2>#14 - All About Productivity‍</h2>
              <h5>Oct 07, 2020</h5>
            </a>
            <p>Here's an archive of all the <a href="/archive">previous issues</a></p>
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
              <h4>Curated by <a href="http://aakarshna.co/?ref=designletterco" target="__blank">Aakarshna</a> & <a href="https://vijayverma.co/?ref=designletterco" target="__blank">vijay verma</a></h4>
            </div>
          </div>
        </div>
      </footer>
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
