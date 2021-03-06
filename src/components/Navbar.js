import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import SearchBox from './SearchBox'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)

    this.data = props.data
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const { data } = this.props

    return (
      <header data-scroll data-scroll-sticky data-scroll-target="#container">
        <div className="header" style={{ transition: `transform 0.35s ease` }}>
          <nav        
            className=""
            role="navigation"
            aria-label="main-navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item" title="Logo">
                  <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
                </Link>
                {/* Hamburger menu */}
                <div
                  className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                  data-target="navMenu"
                  onClick={() => this.toggleHamburger()}
                >
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div
                id="navMenu"
                className={`navbar-menu ${this.state.navBarActiveClass}`}
              >
                <div className="navbar-start has-text-centered">
                  <Link className="navbar-item" to="/about">
                    About
                  </Link>
                  <Link className="navbar-item" to="/products">
                    Products
                  </Link>
                  <Link className="navbar-item" to="/blog">
                    Blog
                  </Link>
                  <Link className="navbar-item" to="/authors">
                    Authors
                  </Link>
                  <Link className="navbar-item" to="/contact">
                    Contact
                  </Link>
                  <Link className="navbar-item" to="/contact/examples">
                    Form Examples
                  </Link>
                  <SearchBox searchIndex={data.siteSearchIndex.index} />
                </div>
                <div className="navbar-end has-text-centered">
                  <a
                    className="navbar-item"
                    href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon">
                      <img src={github} alt="Github" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

const NavbarWithData = (props) => {
  const data = useStaticQuery(graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `
  )
  return (
    <Navbar {...props} data={data} />
  )
}

export default NavbarWithData