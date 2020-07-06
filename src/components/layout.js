import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar/navbar"

const Layout = ({ location, title, children }) => {
  const [classNames, setClassNames] = useState(null)
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
        classNames={classNames}
        updateClassNames={updateClasses}
        pathName={location.pathname}
      />
      <main className={classNames}>{children}</main>
    </div>
  )
}

export default Layout
