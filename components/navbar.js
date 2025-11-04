class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1rem 2rem;
        }
        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }
        .logo {
          font-weight: bold;
          font-size: 1.5rem;
          color: #3b82f6;
          text-decoration: none;
        }
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        .nav-links a {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: #3b82f6;
        }
      </style>
      <nav>
        <div class="container">
          <a href="/" class="logo">SocialSnatch Pro</a>
          <div class="nav-links">
            <a href="/">Home</a>
            <a href="#">How to Use</a>
            <a href="#">FAQ</a>
          </div>
        </div>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);