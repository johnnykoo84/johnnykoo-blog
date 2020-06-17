import React from "react"
import { Link } from "gatsby"
import favicon from "../images/favicon.ico"
import Helmet from "react-helmet"
import { rhythm, scale } from "../utils/typography"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Layout extends React.Component {
  render() {
    const { location, children, siteMetadata } = this.props
    const { title, siteUrl } = siteMetadata
    console.log("@@@@ siteMetadata in layout", siteMetadata)
    console.log("@@@@ title", title)
    console.log("@@@@ siteUrl", siteUrl)
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    const ListLink = props => (
      <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
      </li>
    )
    if (location && location.pathname === rootPath) {
      header = (
        <>
          <h1
            style={{
              // ...scale(1.5),
              fontFamily: `Sriracha, cursive`,
            }}
          >
            <span
              style={{
                ...scale(1.5),
              }}
            >
              <Link
                style={{
                  boxShadow: `none`,
                  textDecoration: `none`,
                  color: `inherit`,
                }}
                to={`/`}
              >
                {title}
              </Link>
            </span>
          </h1>
        </>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Sriracha, cursive`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <>
        <div
          style={{
            backgroundColor: "var(--bg)",
            color: "var(--textNormal)",
            transition: "color 0.2s ease-out, background 0.2s ease-out",
          }}
        >
          <Helmet title={title}>
            {/* <link rel="icon" href={favicon} /> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={`${siteUrl}twitter-card.jpg`} />
          </Helmet>

          <div
            style={{
              marginLeft: `auto`,
              marginRight: `auto`,
              maxWidth: rhythm(24),
              padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            }}
          >
            <div
              style={{
                marginBottom: "1rem",
                textAlign: "right",
              }}
            >
              <div>
                <ul
                  style={{
                    listStyle: `none`,
                    float: `left`,
                  }}
                >
                  <ListLink to="/">Home</ListLink>
                  <ListLink to="/about/">About</ListLink>
                </ul>
              </div>
              <ThemeToggler>
                {({ theme, toggleTheme }) => (
                  <label class="switch">
                    <input
                      type="checkbox"
                      onChange={e =>
                        toggleTheme(e.target.checked ? "dark" : "light")
                      }
                      checked={theme === "dark"}
                    />
                    <span class="slider round"></span>
                  </label>
                )}
              </ThemeToggler>
            </div>
            <div
              style={{
                textAlign: "left",
              }}
            >
              <header>{header}</header>
              <main>{children}</main>
            </div>
            <footer
              style={{
                fontFamily: `Sriracha, cursive`,
              }}
            >
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        </div>
      </>
    )
  }
}

export default Layout
