import { useState } from "react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <button
            className="menu-btn"
            onClick={() => setMobileNavOpen(true)}
            aria-label="Open menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="11" cy="11" r="7" />
            <path d="M16 16l4 4" />
          </svg>
        </div>

        <div className="header-logo">
          <a href="/">LOGO</a>
        </div>

        <div className="header-icons">
          <span className="header-icon" aria-label="Search">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="11" cy="11" r="7" />
              <path d="M16 16l5 5" />
            </svg>
          </span>
          <span className="header-icon" aria-label="Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 000-7.78z" />
            </svg>
          </span>
          <span className="header-icon" aria-label="Cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </span>
          <span className="header-icon header-icon-lang" aria-label="Language">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
            </svg>
          </span>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileNavOpen && (
        <div
          className="mobile-nav-overlay open"
          onClick={() => setMobileNavOpen(false)}
        />
      )}
      <nav className={`mobile-nav${mobileNavOpen ? " open" : ""}`}>
        <div className="mobile-nav-close">
          <button onClick={() => setMobileNavOpen(false)} aria-label="Close menu">✕</button>
        </div>
        <div className="mobile-nav-links">
          <a href="#" className="mobile-nav-link">Shop</a>
          <a href="#" className="mobile-nav-link">Skills</a>
          <a href="#" className="mobile-nav-link">Stories</a>
          <a href="#" className="mobile-nav-link">About</a>
          <a href="#" className="mobile-nav-link">Contact Us</a>
        </div>
      </nav>
    </header>
  );
}
