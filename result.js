// ============================================
// result.js - Display result with single beautiful card
// ============================================

// Character data with PNG image paths
const characterData = {
    athena: {
        name: "Athena",
        nameAr: "أثينا",
        descEn: "Rational, strategic, and analytical. You think before making any decision. Wisdom and understanding are your true weapons. You are the symbol of wisdom and justice.",
        descAr: "عقلانية، استراتيجية، وتحللين كل شيء قبل اتخاذ القرار. الحكمة والفهم هما سلاحك الحقيقي. أنتِ رمز الحكمة والعدالة.",
        image: "athena.png"
    },
    akhenaten: {
        name: "Akhenaten",
        nameAr: "إخناتون",
        descEn: "A revolutionary thinker who isn't afraid to change old beliefs and follow your own path. You have a unique vision and a bold personality that brings change to the world.",
        descAr: "مفكر ثوري، لا تخاف من تغيير المعتقدات القديمة واتباع طريقك الخاص. تمتلك رؤية فريدة وشخصية جريئة تحدث بها تغييراً في العالم.",
        image: "akhenaten.png"
    },
    alexander: {
        name: "Alexander the Great",
        nameAr: "إسكندر الأكبر",
        descEn: "A great leader, ambitious, and refuses limitations. You love adventure and exploring the unknown, always striving to leave an eternal mark on history.",
        descAr: "قائد عظيم، طموح، ولا تقبل بالحدود. تحب المغامرة واكتشاف المجهول، وتسع دائماً لترك بصمة خالدة في التاريخ.",
        image: "alexander.png"
    },
    shajar: {
        name: "Shajar Al-Durr",
        nameAr: "شجر الدر",
        descEn: "Strong, wise, and exceptional. An extraordinary woman who ruled and led at a time when leadership was exclusive to men. You possess an iron will.",
        descAr: "قوية، حكيمة، واستثنائية. أنتِ امرأة استثنائية استطعتِ أن تحكمي وتقودي في وقت كانت فيه القيادة حكراً على الرجال. تمتلكين عزيمة فولاذية.",
        image: "shajar.png"
    },
    saladin: {
        name: "Saladin",
        nameAr: "صلاح الدين",
        descEn: "Noble, just, and a calm leader. You have a wonderful balance between strength and compassion, and everyone respects you. You are the symbol of dignity and chivalry.",
        descAr: "نبيل، عادل، وقائد هادئ. تمتلك توازناً رائعاً بين القوة والرحمة، والجميع يحترمونك. أنتِ رمز الكرامة والشهامة.",
        image: "saladin.png"
    },
    cleopatra: {
        name: "Cleopatra",
        nameAr: "كليوباترا",
        descEn: "Intelligent, social, and knows how to influence others with charm and wisdom. You are a natural leader who loves excellence and beauty.",
        descAr: "ذكية، اجتماعية، وتعرفين كيف تؤثرين على الآخرين بجاذبيتك وحكمتك. أنتِ قائدة بالفطرة وتعشقين التميز والجمال.",
        image: "cleopatra.png"
    },
    nefertiti: {
        name: "Nefertiti",
        nameAr: "نفرتيتي",
        descEn: "Calm, elegant, and balanced. You have a captivating presence without effort, and people are drawn to your peaceful energy and timeless elegance.",
        descAr: "هادئة، راقية، ومتوازنة. تمتلكين حضوراً ساحراً بدون تكلف، والناس تنجذب لطاقتك الهادئة وأناقتك الخالدة.",
        image: "nefertiti.png"
    },
    caesar: {
        name: "Julius Caesar",
        nameAr: "يوليوس قيصر",
        descEn: "Charismatic, dominant, and strategic. You know how to lead people and achieve your goals with determination and power. You are a natural decision maker.",
        descAr: "كاريزمي، مسيطر، واستراتيجي. تعرفين كيف تقود الناس وتحقق أهدافك بإصرار وقوة. أنتِ صانع قرار بالفطرة.",
        image: "caesar.png"
    }
};

// Display result
function displayResult() {
    const savedResult = localStorage.getItem('quizResult');
    
    if (!savedResult) {
        window.location.href = 'index.html';
        return;
    }
    
    const result = JSON.parse(savedResult);
    const characterKey = result.characterKey;
    const character = characterData[characterKey];
    
    if (!character) {
        console.error('Character not found:', characterKey);
        window.location.href = 'index.html';
        return;
    }
    
    // Update name based on current language
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const nameElement = document.getElementById('charName');
    if (nameElement) {
        nameElement.innerHTML = currentLang === 'ar' ? character.nameAr : character.name;
    }
    
    // Update description based on current language
    const descElement = document.getElementById('charDesc');
    if (descElement) {
        descElement.innerHTML = currentLang === 'ar' ? character.descAr : character.descEn;
    }
    
    // Update character image
    const charImage = document.getElementById('charImage');
    if (charImage) {
        charImage.src = character.image;
        charImage.alt = character.name;
        
        // Add error handling
        charImage.onerror = function() {
            this.src = '';
            this.alt = 'Image not found';
            this.style.backgroundColor = '#2a2a2a';
            this.style.padding = '50px';
            this.style.borderRadius = '30px';
            this.style.minHeight = '200px';
        };
    }
}

// Restart quiz
function restartQuiz() {
    localStorage.removeItem('quizResult');
    window.location.href = 'index.html';
}

// Share result
function shareResult() {
    const savedResult = localStorage.getItem('quizResult');
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const lang = translations[currentLang];
    
    if (savedResult) {
        const result = JSON.parse(savedResult);
        const character = characterData[result.characterKey];
        const nameToShow = currentLang === 'ar' ? character.nameAr : character.name;
        const descToShow = currentLang === 'ar' ? character.descAr : character.descEn;
        const shareText = lang.getShareText(nameToShow, descToShow);
        
        if (navigator.share) {
            navigator.share({
                title: 'Ancient Identity Result',
                text: shareText,
            }).catch((err) => {
                console.log('Share cancelled or error:', err);
                copyToClipboard(shareText);
            });
        } else {
            copyToClipboard(shareText);
        }
    }
}

// Copy to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast(translations[currentLang].resultCopied);
    }).catch(() => {
        showToast(translations[currentLang].couldNotCopy);
    });
}

// Show toast message
function showToast(message) {
    let toast = document.getElementById('customToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'customToast';
        document.body.appendChild(toast);
    }
    
    toast.innerHTML = message;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Bind events
function bindResultEvents() {
    const restartBtn = document.getElementById('restartBtn');
    const shareBtn = document.getElementById('shareBtn');
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartQuiz);
    }
    
    if (shareBtn) {
        shareBtn.addEventListener('click', shareResult);
    }
}

// Initialize
function initResult() {
    // Initialize language selector
    if (typeof initLanguageSelector === 'function') {
        initLanguageSelector();
    }
    
    displayResult();
    bindResultEvents();
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', initResult);

// Prevent back navigation without result
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        const savedResult = localStorage.getItem('quizResult');
        if (!savedResult) {
            window.location.href = 'index.html';
        }
    }
});