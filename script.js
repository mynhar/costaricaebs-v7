document.addEventListener('DOMContentLoaded', function() {
    // Industry selector functionality
    const industryBtns = document.querySelectorAll('.industry-btn');
    const industryContent = document.getElementById('industry-content');
    
    // Sample industry data
    const industryData = {
        'Banking & Finance': {
            title: 'Banking & Finance Solutions',
            description: 'Secure, compliant IT infrastructure for financial institutions with high availability requirements.',
            solutions: [
                'Regulatory compliance architecture',
                'High-availability data centers',
                'Financial-grade cybersecurity',
                'Disaster recovery solutions',
                'Secure digital transformation'
            ]
        },
        'Manufacturing': {
            title: 'Manufacturing Solutions',
            description: 'Industrial-grade IT infrastructure for manufacturing operations with uptime-critical systems.',
            solutions: [
                'Plant floor IT infrastructure',
                'Industrial IoT integration',
                'Supply chain security',
                '24/7 operational support',
                'Energy-efficient solutions'
            ]
        },
        'Healthcare': {
            title: 'Healthcare Solutions',
            description: 'HIPAA-compliant infrastructure for healthcare providers with patient data protection.',
            solutions: [
                'Medical data security',
                'Hospital IT infrastructure',
                'Clinical system integration',
                'Emergency power solutions',
                'Telemedicine platforms'
            ]
        },
        'Energy': {
            title: 'Energy Sector Solutions',
            description: 'Mission-critical infrastructure for energy providers with unique operational requirements.',
            solutions: [
                'SCADA system security',
                'Remote site infrastructure',
                'Grid resilience solutions',
                'Hybrid energy systems',
                'Industrial cybersecurity'
            ]
        },
        'Retail': {
            title: 'Retail Solutions',
            description: 'Scalable infrastructure for retail operations with high transaction volumes.',
            solutions: [
                'POS system integration',
                'E-commerce infrastructure',
                'Customer data security',
                'Store network architecture',
                'Energy-efficient retail spaces'
            ]
        }
    };

    industryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const industry = this.textContent.trim();
            const data = industryData[industry];
            
            // Update active button styling
            industryBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'));
            this.classList.add('bg-primary', 'text-white');
            
            // Generate content HTML
            let solutionsHTML = '';
            data.solutions.forEach(solution => {
                solutionsHTML += `
                    <li class="flex items-start mb-2">
                        <i data-feather="check-circle" class="text-primary mr-2 mt-1"></i>
                        <span>${solution}</span>
                    </li>
                `;
            });
            
            const contentHTML = `
                <div class="fade-in bg-gray-50 p-8 rounded-xl">
                    <h3 class="text-2xl font-bold text-gray-900 mb-4">${data.title}</h3>
                    <p class="text-lg text-gray-600 mb-6">${data.description}</p>
                    <h4 class="text-xl font-semibold text-gray-900 mb-3">Our Solutions:</h4>
                    <ul class="space-y-2 text-gray-700">
                        ${solutionsHTML}
                    </ul>
                    <a href="#contact" class="mt-6 inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-secondary transition duration-300">Contact for ${industry} Solutions</a>
                </div>
            `;
            
            industryContent.innerHTML = contentHTML;
            industryContent.classList.remove('hidden');
            feather.replace();
            
            // Smooth scroll to content if on mobile
            if (window.innerWidth < 768) {
                industryContent.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to your server
            alert('Thank you for your inquiry! Our team will contact you shortly.');
            this.reset();
        });
    }
});