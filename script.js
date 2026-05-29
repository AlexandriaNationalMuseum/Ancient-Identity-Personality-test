// ============================================
// script.js - Quiz logic and scoring system
// ============================================

// Character data separated by gender
const characterData = {
    // Female characters
    athena: {
        name: "Athena",
        gender: "female",
        descEn: "Rational, strategic, and analytical. You think before making any decision. Wisdom and understanding are your true weapons. You are the symbol of wisdom and justice.",
        descAr: "عقلانية، استراتيجية، وتحللين كل شيء قبل اتخاذ القرار. الحكمة والفهم هما سلاحك الحقيقي. أنتِ رمز الحكمة والعدالة.",
        image: "athena.png"
    },
    shajar: {
        name: "Shajar Al-Durr",
        gender: "female",
        descEn: "Strong, wise, and exceptional. An extraordinary woman who ruled and led at a time when leadership was exclusive to men. You possess an iron will.",
        descAr: "قوية، حكيمة، واستثنائية. أنتِ امرأة استثنائية استطعتِ أن تحكمي وتقودي في وقت كانت فيه القيادة حكراً على الرجال. تمتلكين عزيمة فولاذية.",
        image: "shajar.png"
    },
    cleopatra: {
        name: "Cleopatra",
        gender: "female",
        descEn: "Intelligent, social, and knows how to influence others with charm and wisdom. You are a natural leader who loves excellence and beauty.",
        descAr: "ذكية، اجتماعية، وتعرفين كيف تؤثرين على الآخرين بجاذبيتك وحكمتك. أنتِ قائدة بالفطرة وتعشقين التميز والجمال.",
        image: "cleopatra.png"
    },
    nefertiti: {
        name: "Nefertiti",
        gender: "female",
        descEn: "Calm, elegant, and balanced. You have a captivating presence without effort, and people are drawn to your peaceful energy and timeless elegance.",
        descAr: "هادئة، راقية، ومتوازنة. تمتلكين حضوراً ساحراً بدون تكلف، والناس تنجذب لطاقتك الهادئة وأناقتك الخالدة.",
        image: "nefertiti.png"
    },
    // Male characters
    akhenaten: {
        name: "Akhenaten",
        gender: "male",
        descEn: "A revolutionary thinker who isn't afraid to change old beliefs and follow your own path. You have a unique vision and a bold personality that brings change to the world.",
        descAr: "مفكر ثوري، لا تخاف من تغيير المعتقدات القديمة واتباع طريقك الخاص. تمتلك رؤية فريدة وشخصية جريئة تحدث بها تغييراً في العالم.",
        image: "akhenaten.png"
    },
    alexander: {
        name: "Alexander the Great",
        gender: "male",
        descEn: "A great leader, ambitious, and refuses limitations. You love adventure and exploring the unknown, always striving to leave an eternal mark on history.",
        descAr: "قائد عظيم، طموح، ولا تقبل بالحدود. تحب المغامرة واكتشاف المجهول، وتسع دائماً لترك بصمة خالدة في التاريخ.",
        image: "alexander.png"
    },
    saladin: {
        name: "Saladin",
        gender: "male",
        descEn: "Noble, just, and a calm leader. You have a wonderful balance between strength and compassion, and everyone respects you. You are the symbol of dignity and chivalry.",
        descAr: "نبيل، عادل، وقائد هادئ. تمتلك توازناً رائعاً بين القوة والرحمة، والجميع يحترمونك. أنتِ رمز الكرامة والشهامة.",
        image: "saladin.png"
    },
    caesar: {
        name: "Julius Caesar",
        gender: "male",
        descEn: "Charismatic, dominant, and strategic. You know how to lead people and achieve your goals with determination and power. You are a natural decision maker.",
        descAr: "كاريزمي، مسيطر، واستراتيجي. تعرف كيف تقود الناس وتحقق أهدافك بإصرار وقوة. أنتِ صانع قرار بالفطرة.",
        image: "caesar.png"
    }
};

// Scoring system - each character starts at 0
const scores = {
    athena: 0,
    akhenaten: 0,
    alexander: 0,
    shajar: 0,
    saladin: 0,
    cleopatra: 0,
    nefertiti: 0,
    caesar: 0
};

// Store selected gender
let selectedGender = null;

// Helper function to add points to characters
function addScore(chars, points = 1) {
    chars.forEach(c => {
        if (scores[c] !== undefined) scores[c] += points;
    });
}

// Question 1: How do people usually describe you?
function q1(answer) {
    if (answer === "A") addScore(["athena", "akhenaten"]);
    if (answer === "B") addScore(["alexander", "caesar"]);
    if (answer === "C") addScore(["nefertiti", "saladin"]);
}

// Question 2: When facing a problem, what do you usually do?
function q2(answer) {
    if (answer === "A") addScore(["athena", "saladin"]);
    if (answer === "B") addScore(["alexander", "cleopatra"]);
    if (answer === "C") addScore(["akhenaten", "nefertiti"]);
}

// Question 3: What drives your decisions in life the most?
function q3(answer) {
    if (answer === "A") addScore(["athena", "akhenaten"]);
    if (answer === "B") addScore(["alexander", "caesar"]);
    if (answer === "C") addScore(["nefertiti", "shajar"]);
}

// Question 4: If someone bothers or wrongs you:
function q4(answer) {
    if (answer === "A") addScore(["athena", "cleopatra"]);
    if (answer === "B") addScore(["alexander", "caesar"]);
    if (answer === "C") addScore(["saladin", "nefertiti"]);
}

// Question 5: People usually see you as:
function q5(answer) {
    if (answer === "A") addScore(["athena", "saladin"]);
    if (answer === "B") addScore(["alexander", "cleopatra"]);
    if (answer === "C") addScore(["akhenaten", "shajar"]);
}

// Question 6: Your approach to life is closest to:
function q6(answer) {
    if (answer === "A") addScore(["athena", "nefertiti"]);
    if (answer === "B") addScore(["alexander", "caesar"]);
    if (answer === "C") addScore(["akhenaten", "shajar"]);
}

// Reset all scores
function resetScores() {
    for (let key in scores) {
        scores[key] = 0;
    }
}

// Calculate result (highest score with tie-breaker) - filtered by gender
function getResult() {
    let max = -1;
    let winners = [];

    for (let key in scores) {
        if (characterData[key] && characterData[key].gender !== selectedGender) {
            continue;
        }
        
        if (scores[key] > max) {
            max = scores[key];
            winners = [key];
        } else if (scores[key] === max && max !== -1) {
            winners.push(key);
        }
    }

    return winners[Math.floor(Math.random() * winners.length)];
}

// Check if gender is selected
function isGenderSelected() {
    const selected = document.querySelector(`input[name="gender"]:checked`);
    if (selected) {
        selectedGender = selected.value;
        return true;
    }
    return false;
}

// Check if all questions are answered
function allQuestionsAnswered() {
    if (!isGenderSelected()) return false;
    
    for (let i = 1; i <= 6; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selected) return false;
    }
    return true;
}

// Update button state and visual selection
function updateButtonState() {
    const btn = document.getElementById('showResultBtn');
    const statusDiv = document.getElementById('scoreStatus');
    
    const genderSelected = isGenderSelected();
    let answeredCount = 0;
    
    if (genderSelected) answeredCount++;
    
    for (let i = 1; i <= 6; i++) {
        if (document.querySelector(`input[name="q${i}"]:checked`)) answeredCount++;
    }
    
    // Update visual selection styling
    updateVisualSelection();
    
    const lang = translations[currentLang];
    if (allQuestionsAnswered()) {
        btn.disabled = false;
        if (statusDiv) statusDiv.innerHTML = lang.allAnswered;
    } else {
        btn.disabled = true;
        if (statusDiv) statusDiv.innerHTML = lang.progressStatus(answeredCount);
    }
}

// Update visual styling for selected options (no circles)
function updateVisualSelection() {
    // Remove selected class from all options
    document.querySelectorAll('.radio-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to checked options
    document.querySelectorAll('input[type="radio"]:checked').forEach(radio => {
        const parent = radio.closest('.radio-option');
        if (parent) {
            parent.classList.add('selected');
        }
    });
}

// Collect answers, compute scores, and return winner
function collectAnswersAndCompute() {
    resetScores();
    const answers = {};
    for (let i = 1; i <= 6; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            answers[`q${i}`] = selected.value;
        } else {
            return null;
        }
    }

    q1(answers.q1);
    q2(answers.q2);
    q3(answers.q3);
    q4(answers.q4);
    q5(answers.q5);
    q6(answers.q6);

    return getResult();
}

// Show result page
function showResultPage() {
    const lang = translations[currentLang];
    
    if (!allQuestionsAnswered()) {
        alert(lang.pleaseAnswerAll);
        return;
    }

    const winnerKey = collectAnswersAndCompute();
    if (!winnerKey) {
        alert(lang.errorOccurred);
        return;
    }

    // Save result to localStorage
    localStorage.setItem('quizResult', JSON.stringify({
        characterKey: winnerKey,
        characterData: characterData[winnerKey]
    }));

    // Redirect to result page
    window.location.href = 'result.html';
}

// Bind click events to radio options
function bindRadioEvents() {
    const allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            updateButtonState();
        });
    });
    
    // Make the entire label clickable
    const options = document.querySelectorAll('.radio-option');
    options.forEach(option => {
        option.addEventListener('click', function(e) {
            const radio = this.querySelector('input[type="radio"]');
            if (radio && !radio.checked) {
                radio.checked = true;
                updateButtonState();
            }
        });
    });
}

// Add card click effects
function addCardEffects() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const radios = card.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', function() {
                card.style.transform = 'scale(0.99)';
                setTimeout(() => {
                    card.style.transform = '';
                }, 150);
            });
        });
    });
}

// Initialize everything
function init() {
    // Initialize language selector first
    if (typeof initLanguageSelector === 'function') {
        initLanguageSelector();
    }
    
    bindRadioEvents();
    updateButtonState();
    addCardEffects();
    
    const showBtn = document.getElementById('showResultBtn');
    if (showBtn) {
        showBtn.addEventListener('click', showResultPage);
    }
    
    const backButton = document.getElementById('backToLandingBtn');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
}

// Start when DOM is ready
document.addEventListener('DOMContentLoaded', init);