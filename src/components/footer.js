import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-brand-wrapper">
              <h2 className="section-title footer-logo">IvoryVows</h2>
              <p className="footer-tagline section-subtitle">
                Where forever begins with a single step.
              </p>
              <div className="footer-divider-icon">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </div>
            </div>
            <nav aria-label="Footer Navigation" className="footer-nav">
              <ul className="footer-nav-list">
                <li className="footer-nav-item">
                  <a href="#hero">
                    <div className="footer-nav-link">
                      <span>Home</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#love-story">
                    <div className="footer-nav-link">
                      <span>Love Story</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#details">
                    <div className="footer-nav-link">
                      <span>Details</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#gallery">
                    <div className="footer-nav-link">
                      <span>Gallery</span>
                    </div>
                  </a>
                </li>
                <li className="footer-nav-item">
                  <a href="#rsvp">
                    <div className="footer-nav-link">
                      <span>RSVP</span>
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
            <div className="footer-social-wrapper">
              <a href="#">
                <div aria-label="Instagram" className="footer-social-link">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                      width="20"
                      height="20"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                  </svg>
                </div>
              </a>
              <a href="#">
                <div aria-label="Facebook" className="footer-social-link">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </a>
              <a href="#">
                <div aria-label="Pinterest" className="footer-social-link">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="9" cx="12" cy="12"></circle>
                    <path d="M8 20l4-9"></path>
                    <path d="M10.7 14c.4 1.3 1.4 2 2.5 2 2.1 0 3.8-1.6 3.8-4 0-2.8-2.2-5-5-5-2.8 0-5 2.2-5 5 0 1 .3 2 .8 2.8"></path>
                  </svg>
                </div>
              </a>
            </div>
            <div className="footer-thank-you">
              <p className="section-content">
                Thank you for being part of our journey.
              </p>
              <span className="footer-couple-names">Julian &amp; Sophia</span>
            </div>
            <div className="footer-bottom">
              <div className="footer-bottom-divider"></div>
              <p className="footer-copyright">
                &amp;copy; 2026 IvoryVows. Handcrafted with love.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<style>
        @keyframes footerHeartPulse {0%,100% {transform: scale(1);}
50% {transform: scale(1.1);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="footer-container4">
        <div className="footer-container5">
          <Script
            html={`<script defer data-name="footer-scroll-handler">
(function(){
  /**
   * Smooth scroll behavior for internal anchor links is already 
   * handled by standard browser behavior and the platform's 
   * smooth-scroll implementation. No additional JS required 
   * for basic footer functionality.
   */
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
