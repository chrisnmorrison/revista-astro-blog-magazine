import React from 'react'

const Links = ({ styleClass, children }) => {
  return (
    <ul className={styleClass}>
      <li>
        <a href="/" className="page-link">
          Home
        </a>
      </li>
      <li>
        <a href="/about" className="page-link">
          About
        </a>
      </li>
      <li>
        <a href="/categories" className="page-link">
          Categories
        </a>
      </li>
      <li>
        <a href="/contact" className="page-link">
          Contact
        </a>
      </li>
    </ul>
  )
}

export default Links
