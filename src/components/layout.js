import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3>
        <Link>
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div>
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, curated by
        {` `}
        <a href="https://www.vijayverma.co">vijay verma.</a>
      </footer>
    </div>
  )
}

export default Layout
