import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const [classNames, setClassNames] = useState("")
  const updateClasses = classNames => {
    setClassNames(classNames)
  }
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
      <Navbar
        pages={data.site.siteMetadata.menuLinks}
        updateClassNames={updateClasses}
      />
      <main className={classNames}>{children}</main>
    </div>
  )
}

export default Layout
