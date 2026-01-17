import React from 'react'
import {
  FaRedditSquare,
  FaTwitterSquare,
  FaGithubSquare,
} from 'react-icons/fa'
import '../css/social-links.css'

const SocialLinks = () => {
  return (
    <div className="social-links-wrapper">
      <ul className="nav-icons">
        <li>
          <a
            href="https://github.com/chrisnmorrison/revista-astro-blog-magazine"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Github"
          >
            <FaGithubSquare className="social-icon github-icon"></FaGithubSquare>
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Subreddit"
          >
            <FaRedditSquare className="social-icon reddit-icon"></FaRedditSquare>
          </a>
        </li>
        <li>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Link to Twitter"
          >
            <FaTwitterSquare className="social-icon twitter-icon"></FaTwitterSquare>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
