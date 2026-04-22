// ============================================
// WAIT FOR DOM TO LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('%c👋 Welcome to Karabo Nkadimeng\'s Portfolio!', 'color: #2563eb; font-size: 16px; font-weight: bold;');
    
    // ============================================
    // TYPING ANIMATION
    // ============================================
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    
    if (typedTextSpan && cursorSpan) {
        const textArray = ['AI & ML Enthusiast', 'Software Developer', 'Problem Solver', 'Innovative Thinker'];
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;
        
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                setTimeout(erase, newTextDelay);
            }
        }
        
        function erase() {
            if (charIndex > 0) {
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 500);
            }
        }
        
        setTimeout(type, 500);
    }
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // ============================================
    // BACK TO TOP BUTTON
    // ============================================
    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.style.display = 'flex';
            } else {
                backToTop.style.display = 'none';
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ============================================
    // MOBILE NAVIGATION TOGGLE
    // ============================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });
    }
    
    document.addEventListener('click', (e) => {
        if (navMenu && navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    // ============================================
    // HIRE ME BUTTON
    // ============================================
    const hireMeBtn = document.getElementById('hireMeBtn');
    if (hireMeBtn) {
        hireMeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = contactSection.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                setTimeout(() => {
                    const nameInput = document.querySelector('#contact-form input[name="name"]');
                    if (nameInput) nameInput.focus();
                }, 800);
            }
        });
    }
    
    // Get In Touch button in About section
    const getInTouchBtn = document.querySelector('.about .btn-primary');
    if (getInTouchBtn) {
        getInTouchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = contactSection.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                setTimeout(() => {
                    const nameInput = document.querySelector('#contact-form input[name="name"]');
                    if (nameInput) nameInput.focus();
                }, 800);
            }
        });
    }
    
    // ============================================
    // VIEW PROJECTS BUTTON
    // ============================================
    const viewProjectsBtn = document.getElementById('viewProjectsBtn');
    if (viewProjectsBtn) {
        viewProjectsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const projectsSection = document.querySelector('#projects');
            if (projectsSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = projectsSection.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // ============================================
    // DOWNLOAD CV BUTTON
    // ============================================
    const downloadCVBtn = document.getElementById('downloadCVBtn');
    if (downloadCVBtn) {
        downloadCVBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            const cvContent = `KARABO NKADIMENG - CURRICULUM VITAE
=====================================

CONTACT INFORMATION
-------------------
Email: knkadimeng511@gmail.com
Phone: 061 958 3664
Location: Thembisa, 1632, South Africa
LinkedIn: linkedin.com/in/karabo-nkadimeng
GitHub: github.com/PROSCARA05

PROFESSIONAL SUMMARY
--------------------
Curious and self-motivated 3rd-year BSc IT student specializing in 
Emerging Technologies, with a passion for building AI-driven solutions 
and innovative software applications.

EDUCATION
---------
2024 - Present: Bachelor of Science in Information Technology
                (Emerging Technologies)
                Richfield Graduate Institute of Technology
                Currently in 3rd year

2023: Higher Certificate in Information Technology
      Richfield Graduate Institute of Technology

2022: National Senior Certificate
      Zitikeni Secondary School

TECHNICAL SKILLS
----------------
Programming: Python, C++, JavaScript
Web Development: HTML5, CSS3, Responsive Design
AI & Emerging Tech: AI Concepts, Machine Learning, Data Handling, Cloud Fundamentals
Tools: Git, GitHub, VS Code, Microsoft 365, Azure, Google Cloud
Libraries: Pandas, NumPy, scikit-learn, Matplotlib

EXPERIENCE
----------
Dec 2023 - Mar 2024: Web Development Intern
                     GAO Tek Inc
                     • Developing and maintaining web pages using HTML, CSS, JavaScript
                     • Participating in debugging and testing processes
                     • Collaborating with team members on project improvements

PROJECTS
--------
1. Personal Portfolio Website (Live)
2. C++ Calculator Application
3. TMF Judicators Choral System (In Progress)
4. Python Data Handling Suite (3-in-1)

LANGUAGES
---------
• Sepedi (Native)
• English (Fluent)
• isiZulu (Conversational)

REFERENCES
----------
Available upon request.`;

            const blob = new Blob([cvContent], { type: 'application/msword' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Karabo_Nkadimeng_CV.doc';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            showNotification('✅ CV Downloaded Successfully!');
        });
    }
    
    function showNotification(message) {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #2563eb 0%, #0ea5e9 100%);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            z-index: 9999;
            font-weight: 500;
            animation: slideUp 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideUp {
            from { transform: translate(-50%, 100%); opacity: 0; }
            to { transform: translate(-50%, 0); opacity: 1; }
        }
        @keyframes slideDown {
            from { transform: translate(-50%, 0); opacity: 1; }
            to { transform: translate(-50%, 100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    // ============================================
    // ACTIVE NAVIGATION LINK ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    function setActiveLink() {
        const scrollY = window.scrollY;
        const navHeight = navbar.offsetHeight;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 50;
            const sectionBottom = sectionTop + section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionBottom) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        if (scrollY < 100) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#home') {
                    link.classList.add('active');
                }
            });
        }
    }
    
    window.addEventListener('scroll', setActiveLink);
    setActiveLink();
    
    // ============================================
    // READING PROGRESS BAR
    // ============================================
    const progressBar = document.querySelector('.reading-progress-bar');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.scrollY;
            const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
            progressBar.style.width = `${Math.min(progress, 100)}%`;
        });
    }
    
    // ============================================
    // COUNTER ANIMATION
    // ============================================
    const counters = document.querySelectorAll('.stat-number');
    let countersAnimated = false;
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !countersAnimated) {
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-count'));
                    let count = 0;
                    const duration = 2000;
                    const increment = target / (duration / 20);
                    
                    const updateCounter = () => {
                        count += increment;
                        if (count < target) {
                            counter.textContent = Math.ceil(count);
                            setTimeout(updateCounter, 20);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    
                    updateCounter();
                });
                countersAnimated = true;
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) counterObserver.observe(statsSection);
    
    // ============================================
    // DARK MODE TOGGLE
    // ============================================
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        const darkMode = localStorage.getItem('darkMode') === 'enabled';
        if (darkMode) {
            document.body.classList.add('dark-mode');
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        darkModeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }
    
    // ============================================
    // PROJECT FILTERS - FIXED BEHAVIOR
    // ============================================
    const projectFilterBtns = document.querySelectorAll('.projects .filter-btn');
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (projectFilterBtns.length > 0 && projectsGrid) {
        const projects = Array.from(document.querySelectorAll('.project-card'));
        
        projectFilterBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Remove active class from all buttons
                projectFilterBtns.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                const filter = this.getAttribute('data-filter');
                
                projects.forEach(project => {
                    const categories = project.getAttribute('data-category').split(' ');
                    
                    if (filter === 'all' || categories.includes(filter)) {
                        project.style.display = 'block';
                        setTimeout(() => {
                            project.style.opacity = '1';
                            project.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        project.style.opacity = '0';
                        project.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            project.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // ============================================
    // SKILL SEARCH
    // ============================================
    const searchInput = document.querySelector('.skill-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            const skillBadges = document.querySelectorAll('.skill-badge');
            const categories = document.querySelectorAll('.skills-category');
            
            skillBadges.forEach(badge => {
                const text = badge.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    badge.style.display = 'inline-block';
                } else {
                    badge.style.display = 'none';
                }
            });
            
            categories.forEach(category => {
                const visibleBadges = category.querySelectorAll('.skill-badge[style*="display: inline-block"], .skill-badge:not([style*="display: none"])');
                if (visibleBadges.length > 0) {
                    category.style.display = 'block';
                } else {
                    category.style.display = 'none';
                }
            });
        });
    }
    
    // ============================================
    // PROJECT CARD CLICKS
    // ============================================
    document.querySelectorAll('.project-card').forEach(card => {
        const detailLink = card.querySelector('.project-link[href*="project-detail.html"]');
        if (detailLink) {
            card.style.cursor = 'pointer';
            card.addEventListener('click', (e) => {
                if (!e.target.closest('a')) {
                    window.location.href = detailLink.getAttribute('href');
                }
            });
        }
    });
    
    // ============================================
    // CONTACT CARD CLICKS (Copy to clipboard)
    // ============================================
    document.querySelectorAll('.contact-card').forEach(card => {
        card.addEventListener('click', () => {
            const text = card.querySelector('p')?.textContent;
            if (text && navigator.clipboard) {
                navigator.clipboard.writeText(text).then(() => {
                    showNotification('📋 Copied to clipboard!');
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
        });
    });
    
    // ============================================
    // KONAMI CODE EASTER EGG
    // ============================================
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === konamiCode[konamiIndex].toLowerCase()) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                document.body.classList.add('rainbow');
                console.log('%c🎉 KONAMI CODE ACTIVATED! 🎉', 'color: gold; font-size: 16px; font-weight: bold;');
                setTimeout(() => document.body.classList.remove('rainbow'), 2000);
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
    
    console.log("%c🎮 Try typing the Konami Code (↑ ↑ ↓ ↓ ← → ← → B A)!", "color: #fbbf24; font-size: 12px;");
});
