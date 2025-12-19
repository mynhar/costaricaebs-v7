class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #1e293b;
          color: white;
          padding: 3rem 0;
        }
        
        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .footer-logo-img {
          height: 40px;
          margin-right: 1rem;
        }
        
        .footer-logo-text {
          font-size: 1.25rem;
          font-weight: 700;
        }
        
        .footer-about {
          max-width: 300px;
          color: #94a3b8;
          line-height: 1.6;
        }
        
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .footer-link-item {
          margin-bottom: 0.75rem;
        }
        
        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s;
        }
        
        .footer-link:hover {
          color: white;
        }
        
        .footer-contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          color: #94a3b8;
        }
        
        .footer-contact-icon {
          margin-right: 1rem;
          color: #3b82f6;
        }
        
        .footer-bottom {
          border-top: 1px solid #334155;
          padding-top: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        
        .footer-copyright {
          color: #94a3b8;
          margin-bottom: 1rem;
        }
        
        .footer-social {
          display: flex;
          gap: 1rem;
        }
        
        .footer-social-link {
          color: white;
          background-color: #334155;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.3s;
        }
        
        .footer-social-link:hover {
          background-color: #3b82f6;
        }
        
        @media (min-width: 768px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
          
          .footer-social {
            margin-bottom: 0;
          }
        }
      </style>
      
      <div class="footer-container">
        <div class="footer-grid">
          <div>
            <div class="footer-logo">
              <img src="http://static.photos/technology/200x200/5" alt="Costa Rica EBS Logo" class="footer-logo-img">
              <span class="footer-logo-text">Costa Rica EBS</span>
            </div>
            <p class="footer-about">
              Enterprise IT, Cloud and Energy Solutions for mission-critical environments in Costa Rica and Central America.
            </p>
          </div>
          
          <div>
            <h3 class="footer-heading">Services</h3>
            <ul class="footer-links">
              <li class="footer-link-item"><a href="#" class="footer-link">Professional IT Services</a></li>
              <li class="footer-link-item"><a href="#" class="footer-link">Microsoft Solutions</a></li>
              <li class="footer-link-item"><a href="#" class="footer-link">Data Center Solutions</a></li>
              <li class="footer-link-item"><a href="#" class="footer-link">Cybersecurity</a></li>
              <li class="footer-link-item"><a href="#" class="footer-link">Energy Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="footer-heading">Company</h3>
            <ul class="footer-links">
              <li class="footer-link-item"><a href="#" class="footer-link">About Us</a></li>
              <li class="footer-link-item"><a href="#" class="footer-link">Our Approach</a></li>
              <li class="footer-link-item"><a href="#" class="footer-link">Case Studies</a></li>
              <li class="footer-link-item"><a href="#" class="footer-link">Careers</a></li>
              <li class="footer-link-item"><a href="#" class="footer-link">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 class="footer-heading">Contact</h3>
            <div class="footer-contact-item">
              <i data-feather="map-pin" class="footer-contact-icon"></i>
              <span>San José, Costa Rica</span>
            </div>
            <div class="footer-contact-item">
              <i data-feather="mail" class="footer-contact-icon"></i>
              <span>enterprise@cr-ebs.com</span>
            </div>
            <div class="footer-contact-item">
              <i data-feather="phone" class="footer-contact-icon"></i>
              <span>+506 2222-2222</span>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p class="footer-copyright">© ${new Date().getFullYear()} Costa Rica Enterprise Business Solutions. All rights reserved.</p>
          <div class="footer-social">
            <a href="#" class="footer-social-link">
              <i data-feather="linkedin"></i>
            </a>
            <a href="#" class="footer-social-link">
              <i data-feather="twitter"></i>
            </a>
            <a href="#" class="footer-social-link">
              <i data-feather="facebook"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("custom-footer", CustomFooter);
