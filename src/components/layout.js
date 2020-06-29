import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Navbar from "./navbar"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menuLinks {
            link
            name
          }
        }
      }
    }
  `)
  return (
    <div>
      <Navbar pages={ data.site.siteMetadata.menuLinks } />
      <main>{children}</main>
    </div>
  )
}

export default Layout
