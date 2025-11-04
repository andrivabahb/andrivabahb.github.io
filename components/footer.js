class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1f2937;
          color: white;
          padding: 2rem 1rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-links a:hover {
          color: white;
        }
        .copyright {
          color: #6b7280;
          font-size: 0.875rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="#">Terms of Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
          <p class="copyright">&copy; ${new Date().getFullYear()} SocialSnatch Pro. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);