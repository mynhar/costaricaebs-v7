class CustomNavigation extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
        }
        
        .logo-img {
          height: 40px;
          margin-right: 1rem;
        }
        
        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e40af;
        }
        
        .nav-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .nav-item {
          position: relative;
        }
        
        .nav-link {
          color: #4b5563;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 0;
        }
        
        .nav-link:hover {
          color: #1e40af;
        }
        
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: white;
          border-radius: 0.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          min-width: 220px;
          padding: 0.5rem 0;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
          z-index: 50;
        }
        
        .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .dropdown-link {
          display: block;
          padding: 0.5rem 1.5rem;
          color: #4b5563;
          transition: all 0.3s ease;
        }
        
        .dropdown-link:hover {
          background-color: #f1f5f9;
          color: #1e40af;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: white;
          padding: 1rem 2rem;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
          max-height: calc(100vh - 80px);
          overflow-y: auto;
        }
        
        .mobile-menu.open {
          display: block;
        }
        
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .mobile-nav-item {
          position: relative;
        }
        
        .mobile-nav-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #4b5563;
          font-weight: 500;
          text-decoration: none;
          padding: 0.75rem 0;
        }
        
        .mobile-dropdown-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        
        .mobile-dropdown-menu {
          display: none;
          padding-left: 1rem;
          padding-top: 0.5rem;
        }
        
        .mobile-dropdown-link {
          display: block;
          padding: 0.5rem 0;
          color: #64748b;
        }
        
        .mobile-dropdown-link:hover {
          color: #1e40af;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <div class="nav-container">
        <div class="logo-container">
          <img src="http://static.photos/technology/200x200/5" alt="Costa Rica EBS Logo" class="logo-img">
          <span class="logo-text">Costa Rica EBS</span>
        </div>
        
        <nav class="nav-links">
          <div class="nav-item">
            <a href="#services" class="nav-link">Services</a>
          </div>
          
          <div class="nav-item">
            <a href="#" class="nav-link">
              IT Services
              <i data-feather="chevron-down" class="w-4 h-4"></i>
            </a>
            <div class="dropdown-menu">
              <a href="#it-services" class="dropdown-link">Consulting & Architecture</a>
              <a href="#it-services" class="dropdown-link">Implementation & Migrations</a>
              <a href="#it-services" class="dropdown-link">Operations & Support</a>
            </div>
          </div>
          
          <div class="nav-item">
            <a href="#" class="nav-link">
              Microsoft
              <i data-feather="chevron-down" class="w-4 h-4"></i>
            </a>
            <div class="dropdown-menu">
              <a href="#microsoft" class="dropdown-link">Azure Cloud Services</a>
              <a href="#microsoft" class="dropdown-link">Microsoft 365 & Entra ID</a>
              <a href="#microsoft" class="dropdown-link">Security & Compliance</a>
            </div>
          </div>
          
          <div class="nav-item">
            <a href="#" class="nav-link">
              Energy
              <i data-feather="chevron-down" class="w-4 h-4"></i>
            </a>
            <div class="dropdown-menu">
              <a href="#energy" class="dropdown-link">Data Center Power</a>
              <a href="#energy" class="dropdown-link">Enterprise Solar</a>
              <a href="#energy" class="dropdown-link">Energy Continuity</a>
            </div>
          </div>
          
          <div class="nav-item">
            <a href="#contact" class="nav-link">Contact</a>
          </div>
        </nav>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
        
        <div class="mobile-menu">
          <div class="mobile-nav-links">
            <a href="#services" class="mobile-nav-link">Services</a>
            
            <div class="mobile-nav-item">
              <div class="flex items-center justify-between">
                <a href="#" class="mobile-nav-link">IT Services</a>
                <button class="mobile-dropdown-btn">
                  <i data-feather="chevron-down" class="w-4 h-4"></i>
                </button>
              </div>
              <div class="mobile-dropdown-menu">
                <a href="#it-services" class="mobile-dropdown-link">Consulting & Architecture</a>
                <a href="#it-services" class="mobile-dropdown-link">Implementation & Migrations</a>
                <a href="#it-services" class="mobile-dropdown-link">Operations & Support</a>
              </div>
            </div>
            
            <div class="mobile-nav-item">
              <div class="flex items-center justify-between">
                <a href="#" class="mobile-nav-link">Microsoft</a>
                <button class="mobile-dropdown-btn">
                  <i data-feather="chevron-down" class="w-4 h-4"></i>
                </button>
              </div>
              <div class="mobile-dropdown-menu">
                <a href="#microsoft" class="mobile-dropdown-link">Azure Cloud Services</a>
                <a href="#microsoft" class="mobile-dropdown-link">Microsoft 365 & Entra ID</a>
                <a href="#microsoft" class="mobile-dropdown-link">Security & Compliance</a>
              </div>
            </div>
            
            <div class="mobile-nav-item">
              <div class="flex items-center justify-between">
                <a href="#" class="mobile-nav-link">Energy</a>
                <button class="mobile-dropdown-btn">
                  <i data-feather="chevron-down" class="w-4 h-4"></i>
                </button>
              </div>
              <div class="mobile-dropdown-menu">
                <a href="#energy" class="mobile-dropdown-link">Data Center Power</a>
                <a href="#energy" class="mobile-dropdown-link">Enterprise Solar</a>
                <a href="#energy" class="mobile-dropdown-link">Energy Continuity</a>
              </div>
            </div>
            
            <a href="#contact" class="mobile-nav-link">Contact</a>
          </div>
        </div>
      </div>
`;
    // Mobile menu functionality
    const mobileMenuBtn = this.shadowRoot.querySelector(".mobile-menu-btn");
    const mobileMenu = this.shadowRoot.querySelector(".mobile-menu");

    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
      feather.replace();
    });

    // Mobile dropdown functionality
    const mobileDropdownBtns = this.shadowRoot.querySelectorAll(
      ".mobile-dropdown-btn"
    );
    mobileDropdownBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const dropdownMenu = btn.parentElement.nextElementSibling;
        const isOpen = dropdownMenu.style.display === "block";

        // Close all other dropdowns
        document.querySelectorAll(".mobile-dropdown-menu").forEach((menu) => {
          if (menu !== dropdownMenu) {
            menu.style.display = "none";
            const icon = menu.previousElementSibling.querySelector("i");
            if (icon) {
              icon.setAttribute("data-feather", "chevron-down");
            }
          }
        });

        // Toggle current dropdown
        dropdownMenu.style.display = isOpen ? "none" : "block";
        const icon = btn.querySelector("i");
        if (icon) {
          icon.setAttribute(
            "data-feather",
            isOpen ? "chevron-down" : "chevron-up"
          );
          feather.replace();
        }
      });
    });

    // Close mobile menu when clicking a link
    const mobileLinks = this.shadowRoot.querySelectorAll(
      ".mobile-nav-link, .mobile-dropdown-link"
    );
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });

    // Initialize icons
    feather.replace();
  }
}

customElements.define("custom-navigation", CustomNavigation);
