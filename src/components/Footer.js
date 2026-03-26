export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-newsletter">
          <h3>Be The First To Know</h3>
          <p>Sign up for updates from mettā muse.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your e-mail..." aria-label="Email for newsletter" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            +44 221 133 5360<br />
            customercare@mettamuse.com
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Orders &amp; Shipping</a></li>
            <li><a href="#">Join/Login as a Seller</a></li>
            <li><a href="#">Payment &amp; Pricing</a></li>
            <li><a href="#">Return &amp; Refunds</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="3" />
                <path d="M8 11v5M8 8v.01M12 16v-5c0-1 .6-2 2-2s2 1 2 2v5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>mettā muse Accepts</h4>
          <div className="footer-social">
            <span>💳</span>
            <span>Visa</span>
            <span>Mastercard</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        © 2023 mettā muse. All rights reserved.
      </div>
    </footer>
  );
}
