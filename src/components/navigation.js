import React from 'react'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <div className="navigation-left">
            <a href="#love-story">
              <div className="navigation-link">
                <span>Love Story</span>
              </div>
            </a>
            <a href="#wedding-details">
              <div className="navigation-link">
                <span>Details</span>
              </div>
            </a>
          </div>
          <a href="#">
            <div className="navigation-logo">
              <div className="navigation-logo-icon">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <span className="navigation-brand-name">IvoryVows</span>
            </div>
          </a>
          <div className="navigation-right">
            <a href="#gallery">
              <div className="navigation-link">
                <span>Gallery</span>
              </div>
            </a>
            <a href="#rsvp">
              <div className="btn-primary btn-sm btn">
                <span>RSVP</span>
              </div>
            </a>
          </div>
          <button
            id="mobile-toggle"
            aria-label="Open Menu"
            aria-expanded="false"
            className="navigation-toggle"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 8h16M4 16h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      <div id="mobile-overlay" className="navigation-mobile-overlay">
        <div className="navigation-mobile-header">
          <a href="#">
            <div className="navigation-logo">
              <span className="navigation-brand-name">IvoryVows</span>
            </div>
          </a>
          <button
            id="mobile-close"
            aria-label="Close Menu"
            className="navigation-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-mobile-content">
          <a href="#love-story">
            <div className="navigation-mobile-link">
              <span>Love Story</span>
            </div>
          </a>
          <a href="#wedding-details">
            <div className="navigation-mobile-link">
              <span>Wedding Details</span>
            </div>
          </a>
          <a href="#gallery">
            <div className="navigation-mobile-link">
              <span>Photo Gallery</span>
            </div>
          </a>
          <a href="#rsvp">
            <div className="navigation-mobile-link">
              <span>RSVP</span>
            </div>
          </a>
          <div className="navigation-mobile-footer">
            <div className="navigation-logo-icon">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </div>
            <p className="section-content">Celebrating Love &amp; Commitment</p>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileLinks = document.querySelectorAll('.navigation-mobile-link');

  function openMenu() {
    mobileOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    mobileToggle.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileOverlay.style.display = 'none';
    document.body.style.overflow = '';
    mobileToggle.setAttribute('aria-expanded', 'false');
  }

  mobileToggle.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767 && mobileOverlay.style.display === 'flex') {
      closeMenu();
    }
  });

  let lastScroll = 0;
  const navWrapper = document.querySelector('.navigation-wrapper');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navWrapper.style.boxShadow = 'none';
      return;
    }

    if (currentScroll > lastScroll) {
      navWrapper.style.transform = 'translateY(-100%)';
    } else {
      navWrapper.style.transform = 'translateY(0)';
      navWrapper.style.boxShadow = '0 4px 20px rgba(246, 193, 204, 0.1)';
    }
    
    lastScroll = currentScroll;
  });
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
