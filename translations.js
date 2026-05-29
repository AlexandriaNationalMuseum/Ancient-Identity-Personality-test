// ============================================
// translations.js - Language translations for all pages
// ============================================

const translations = {
    en: {
        // Common elements
        backToMain: "Back to Main Page",
        discoverYour: "Discover Your Ancient Identity",
        chooseAnswer: "Choose the answer that fits your personality",
        
        // Gender question
        question1: "Question 1",
        selectGender: "Select your gender:",
        female: "Female ♀",
        male: "Male ♂",
        
        // Question 1 (original)
        question2: "Question 2",
        q1Text: "People usually describe you as:",
        q1A: "Someone who thinks differently from others",
        q1B: "Strong and confident",
        q1C: "Calm and easy to be around",
        
        // Question 2
        question3: "Question 3",
        q2Text: "When you face a problem, you usually:",
        q2A: "Think it through and analyze calmly",
        q2B: "Deal with it quickly and directly",
        q2C: "Step back for a bit until you understand it better",
        
        // Question 3
        question4: "Question 4",
        q3Text: "What mainly drives your decisions in life is:",
        q3A: "Curiosity and wanting to understand things",
        q3B: "Success and proving yourself",
        q3C: "Living freely without pressure",
        
        // Question 4
        question5: "Question 5",
        q4Text: "If someone hurts or wrongs you:",
        q4A: "Respond logically and calmly",
        q4B: "React fast and firmly",
        q4C: "Stay quiet and walk away",
        
        // Question 5
        question6: "Question 6",
        q5Text: "People usually see you as:",
        q5A: "Wise and insightful",
        q5B: "A leader who influences others",
        q5C: "A bit mysterious and hard to read",
        
        // Question 6
        question7: "Question 7",
        q6Text: "Your lifestyle is more like:",
        q6A: "Thinking before acting",
        q6B: "Going after goals with focus and determination",
        q6C: "Living your own way with no restrictions",
        
        // Result button
        discoverBtn: "Discover Your Ancient Identity",
        
        // Status messages
        allAnswered: "✅ All questions answered! Click to discover your personality ✅",
        progressStatus: (count) => `📝 ${count}/7 questions answered... Complete all answers to see your result 📝`,
        
        // Alerts
        pleaseAnswerAll: "⚠️ Please answer all questions (including gender selection) first ⚠️",
        errorOccurred: "An error occurred, please try again",
        
        // Result page
        yourIdentityIs: "Your Ancient Identity Is",
        retakeTest: "🔄 Retake Test",
        shareResult: "📤 Share Result",
        resultCopied: "✅ Result copied! You can share it now ✅",
        couldNotCopy: "⚠️ Could not copy, you can copy the text manually ⚠️",
        
        // Landing page
        discoverYourTag: "DISCOVER YOUR",
        ancient: "ANCIENT",
        identity: "IDENTITY",
        subtitle: "A personality journey through the greatest civilizations in history.",
        start: "START",
        egyptian: "EGYPTIAN",
        grecoRoman: "GRECO-ROMAN",
        islamicGolden: "ISLAMIC GOLDEN AGE",
        
        // Language
        language: "Language",
        arabic: "العربية",
        english: "English",
        
        // Share text function
        getShareText: (name, desc) => `🎭 My Ancient Identity is "${name}"! 🎭\n\n${desc}\n\nDiscover your personality on the Ancient Identity website`
    },
    
    ar: {
        // Common elements
        backToMain: "العودة إلى الصفحة الرئيسية",
        discoverYour: "اكتشف هويتك القديمة",
        chooseAnswer: "اختر الإجابة التي تناسب شخصيتك",
        
        // Gender question
        question1: "السؤال 1",
        selectGender: "اختر جنسك:",
        female: "أنثى ♀",
        male: "ذكر ♂",
        
        // Question 1 (original)
        question2: "السؤال 2",
        q1Text: "عادة ما يصفك الناس بأنك:",
        q1A: "مختلف في تفكيرك عن الآخرين",
        q1B: "شخص قوي وواثق من نفسه",
        q1C: "هادئ ومريح في التعامل",
        
        // Question 2
        question3: "السؤال 3",
        q2Text: "عندما تواجه مشكلة، عادة ما:",
        q2A: "تفكر وتحلل بهدوء",
        q2B: "تتعامل معها بسرعة وبشكل مباشر",
        q2C: "تتراجع قليلاً حتى تفهم الصورة بشكل أفضل",
        
        // Question 3
        question4: "السؤال 4",
        q3Text: "ما الذي يحرك قراراتك في الحياة أكثر؟",
        q3A: "الفضول وحب الفهم",
        q3B: "تحقيق النجاح وإثبات الذات",
        q3C: "العيش بحرية بدون ضغط",
        
        // Question 4
        question5: "السؤال 5",
        q4Text: "إذا أذاك شخص ما أو ظلمك:",
        q4A: "ترد بعقل ومنطق",
        q4B: "تتفاعل بسرعة وبحسم",
        q4C: "تبقى هادئاً وتبتعد",
        
        // Question 5
        question6: "السؤال 6",
        q5Text: "عادة ما يراك الناس على أنك:",
        q5A: "شخص حكيم ومتفهم",
        q5B: "قائد يؤثر في الآخرين",
        q5C: "غامض بعض الشيء ويصعب فهمك",
        
        // Question 6
        question7: "السؤال 7",
        q6Text: "نمط حياتك أشبه بـ:",
        q6A: "التفكير قبل التصرف",
        q6B: "السعي لتحقيق الأهداف بتركيز وإصرار",
        q6C: "العيش بطريقتك الخاصة بدون قيود",
        
        // Result button
        discoverBtn: "اكتشف هويتك القديمة",
        
        // Status messages
        allAnswered: "✅ تمت إجابة جميع الأسئلة! اضغط لمعرفة شخصيتك ✅",
        progressStatus: (count) => `📝 تمت إجابة ${count}/7 أسئلة... أجب على جميع الأسئلة لرؤية النتيجة 📝`,
        
        // Alerts
        pleaseAnswerAll: "⚠️ الرجاء الإجابة على جميع الأسئلة (بما في ذلك اختيار الجنس) أولاً ⚠️",
        errorOccurred: "حدث خطأ، الرجاء المحاولة مرة أخرى",
        
        // Result page
        yourIdentityIs: "هويتك القديمة هي",
        retakeTest: "🔄 إعادة الاختبار",
        shareResult: "📤 مشاركة النتيجة",
        resultCopied: "✅ تم نسخ النتيجة! يمكنك مشاركتها الآن ✅",
        couldNotCopy: "⚠️ لم نتمكن من النسخ، يمكنك نسخ النص يدوياً ⚠️",
        
        // Landing page
        discoverYourTag: "اكتشف",
        ancient: "هويتك",
        identity: "القديمة",
        subtitle: "رحلة شخصية عبر أعظم الحضارات في التاريخ.",
        start: "ابدأ",
        egyptian: "مصرية",
        grecoRoman: "يونانية رومانية",
        islamicGolden: "العصر الذهبي الإسلامي",
        
        // Language
        language: "اللغة",
        arabic: "العربية",
        english: "English",
        
        // Share text function
        getShareText: (name, desc) => `🎭 هويتي القديمة هي "${name}"! 🎭\n\n${desc}\n\nاكتشف شخصيتك على موقع Ancient Identity`
    }
};

// Current language - will be set from localStorage or default to 'en'
let currentLang = 'en';

// Function to apply translations to the page
function applyTranslations() {
    const lang = translations[currentLang];
    if (!lang) return;
    
    console.log('Applying translations for language:', currentLang);
    
    // Update elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key] !== undefined) {
            if (typeof lang[key] === 'string') {
                element.textContent = lang[key];
            }
        }
    });
    
    // Update elements with data-translate-html attribute
    document.querySelectorAll('[data-translate-html]').forEach(element => {
        const key = element.getAttribute('data-translate-html');
        if (lang[key] !== undefined) {
            element.innerHTML = lang[key];
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (lang[key] !== undefined) {
            element.placeholder = lang[key];
        }
    });
    
    // Update status message if function exists
    if (typeof updateStatusMessage === 'function') {
        updateStatusMessage();
    }
    
    // Update document direction for RTL (Arabic)
    if (currentLang === 'ar') {
        document.documentElement.dir = 'rtl';
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
        
        // Adjust container direction
        const container = document.querySelector('.container');
        if (container) {
            container.style.direction = 'rtl';
        }
        
        // Adjust back button container
        const backContainer = document.querySelector('.back-button-container');
        if (backContainer) {
            backContainer.style.textAlign = 'right';
        }
        
        // Adjust radio options for RTL
        const radioOptions = document.querySelectorAll('.radio-option');
        radioOptions.forEach(option => {
            option.style.justifyContent = 'flex-start';
            option.style.flexDirection = 'row';
        });
    } else {
        document.documentElement.dir = 'ltr';
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
        
        const container = document.querySelector('.container');
        if (container) {
            container.style.direction = 'ltr';
        }
        
        const backContainer = document.querySelector('.back-button-container');
        if (backContainer) {
            backContainer.style.textAlign = 'left';
        }
    }
    
    // Save language preference
    localStorage.setItem('preferredLanguage', currentLang);
}

// Update status message dynamically
function updateStatusMessage() {
    const statusDiv = document.getElementById('scoreStatus');
    if (!statusDiv) return;
    
    const answeredCount = getAnsweredCount();
    const lang = translations[currentLang];
    
    if (answeredCount === 7) {
        statusDiv.innerHTML = lang.allAnswered;
    } else {
        statusDiv.innerHTML = lang.progressStatus(answeredCount);
    }
}

// Helper function to get answered count
function getAnsweredCount() {
    let count = 0;
    const genderSelected = document.querySelector('input[name="gender"]:checked');
    if (genderSelected) count++;
    for (let i = 1; i <= 6; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) count++;
    }
    return count;
}

// Function to change language
function setLanguage(lang) {
    if (lang !== 'en' && lang !== 'ar') return;
    currentLang = lang;
    applyTranslations();
    
    // Update dropdown value
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = lang;
    }
    
    // Trigger any additional updates
    if (typeof updateButtonState === 'function') {
        updateButtonState();
    }
}

// Initialize language selector and load saved preference
function initLanguageSelector() {
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
        currentLang = savedLang;
    }
    
    // Apply translations
    applyTranslations();
    
    // Setup dropdown listener
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.addEventListener('change', function(e) {
            setLanguage(e.target.value);
        });
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, setLanguage, currentLang, initLanguageSelector };
}