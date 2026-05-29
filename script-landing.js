// ============================================
// script-landing.js - Ancient Identity Theme
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize language selector
    if (typeof initLanguageSelector === 'function') {
        initLanguageSelector();
    }
    
    // Handle logo loading error
    const logoImg = document.getElementById('siteLogo');
    if (logoImg) {
        logoImg.addEventListener('error', function() {
            const logoWrapper = document.querySelector('.logo-wrapper');
            if (logoWrapper && !logoWrapper.querySelector('.logo-fallback')) {
                const fallbackLogo = document.createElement('div');
                fallbackLogo.className = 'logo-fallback';
                fallbackLogo.innerHTML = '⚜️';
                fallbackLogo.style.cssText = `
                    font-family: 'Cinema Decorative', serif;
                    font-size: 2.5rem;
                    color: #e8d5a3;
                    text-shadow: 0 0 15px rgba(232,213,163,0.5);
                `;
                logoWrapper.innerHTML = '';
                logoWrapper.appendChild(fallbackLogo);
            }
        });
    }
    
    // Start Journey Button - Redirect to Quiz
    const startBtn = document.getElementById('startJourneyBtn');
    if (startBtn) {
        startBtn.addEventListener('click', function() {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                window.location.href = 'quiz.html';
            }, 150);
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    }
    
    // Civilization Modal Data
    const civData = {
        egyptian: {
            titleEn: "EGYPTIAN CIVILIZATION",
            titleAr: "الحضارة المصرية",
            descEn: "Step into the world of Pharaohs, pyramids, and eternal wisdom. The ancient Egyptians believed in balance, Ma'at, and the journey of the soul. Their legacy teaches us about power, mystery, and the art of leaving a mark that lasts forever.",
            descAr: "ادخل عالم الفراعنة والأهرامات والحكمة الخالدة. آمن المصريون القدماء بالتوازن وماعت ورحلة الروح. يعلمنا إرثهم عن القوة والغموض وفن ترك بصمة تدوم إلى الأبد.",
            icon: "𓋹"
        },
        greco: {
            titleEn: "GRECO-ROMAN CIVILIZATION",
            titleAr: "الحضارة اليونانية الرومانية",
            descEn: "From the philosophy of Socrates to the might of Rome, Greco-Roman culture shaped Western thought. Heroes, gods, and the pursuit of excellence defined these civilizations. Discover your inner warrior, thinker, or ruler.",
            descAr: "من فلسفة سقراط إلى قوة روما، شكلت الثقافة اليونانية الرومانية الفكر الغربي. الأبطال والآلهة والسعي للتميز ميزت هذه الحضارات. اكتشف محاربك الداخلي أو مفكرك أو حاكمك.",
            icon: "⚡"
        },
        islamic: {
            titleEn: "ISLAMIC GOLDEN AGE",
            titleAr: "العصر الذهبي الإسلامي",
            descEn: "An era of knowledge, art, and scientific breakthrough. From Baghdad to Cordoba, scholars advanced mathematics, medicine, and philosophy. This civilization celebrates wisdom, justice, and the beauty of discovery.",
            descAr: "عصر من المعرفة والفن والاختراق العلمي. من بغداد إلى قرطبة، قدم العلماء إسهامات في الرياضيات والطب والفلسفة. تحتفل هذه الحضارة بالحكمة والعدالة وجمال الاكتشاف.",
            icon: "✧"
        }
    };
    
    // Create Modal dynamically
    let modal = document.getElementById('civModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'civModal';
        modal.className = 'civ-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <div class="modal-icon"></div>
                <h2 id="modalTitle"></h2>
                <p id="modalDesc"></p>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const modalClose = modal.querySelector('.modal-close');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalIcon = modal.querySelector('.modal-icon');
    
    function openModal(civType) {
        const data = civData[civType];
        const currentLang = localStorage.getItem('preferredLanguage') || 'en';
        
        if (data) {
            if (modalTitle) {
                modalTitle.textContent = currentLang === 'ar' ? data.titleAr : data.titleEn;
            }
            if (modalDesc) {
                modalDesc.textContent = currentLang === 'ar' ? data.descAr : data.descEn;
            }
            if (modalIcon) {
                modalIcon.innerHTML = data.icon;
                modalIcon.style.fontSize = '3rem';
            }
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Add click event to civilization cards
    const cards = document.querySelectorAll('.civ-card');
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.stopPropagation();
            const civType = this.getAttribute('data-civ');
            openModal(civType);
        });
    });
    
    // Close modal functionality
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Add animation to cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                entry.target.style.transition = 'all 0.6s ease';
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.civ-card').forEach(card => {
        observer.observe(card);
    });
    
    // Add hover effect to start button
    const startButton = document.querySelector('.start-journey-btn');
    if (startButton) {
        startButton.addEventListener('mouseenter', function() {
            this.style.gap = '15px';
        });
        startButton.addEventListener('mouseleave', function() {
            this.style.gap = '12px';
        });
    }
    
    // Logo animation on load
    const logo = document.querySelector('.site-logo');
    if (logo) {
        logo.style.opacity = '0';
        logo.style.transform = 'scale(0.9)';
        setTimeout(() => {
            logo.style.transition = 'all 0.6s ease';
            logo.style.opacity = '1';
            logo.style.transform = 'scale(1)';
        }, 100);
    }
    
    console.log('✨ Ancient Identity Landing Page Ready ✨');
});