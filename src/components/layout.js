import * as React from "react"
import { Link } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => (
  <div className="page">
    <header className="site-header">
      <Link to="/" className="brand">
        Sentient Carbon
      </Link>
    </header>
    <main>{children}</main>
    <footer className="site-footer">© {new Date().getFullYear()} Sentient Carbon</footer>
  </div>
)

export default Layout
