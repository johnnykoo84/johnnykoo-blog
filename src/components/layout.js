import React from "react"
import { Link } from "gatsby"
import favicon from "../images/favicon.ico"
import Helmet from "react-helmet"
import { rhythm, scale } from "../utils/typography"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
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
              marginBottom: rhythm(1.5),
              marginTop: 0,
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
          {/* <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about/">About</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
          </ul> */}
        </>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Sriracha, cursive`,
            marginTop: 0,
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
          <Helmet>
            <link rel="icon" href={favicon} />
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
            <header>{header}</header>
            <main>{children}</main>
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
