// App State
let currentQuestions = [...questionsData];
let filteredQuestions = [...questionsData];
let currentIndex = 0;
let userAnswers = {}; // { qId: selectedOptionIndex }
let flaggedQuestions = new Set();
let appMode = 'practice'; // 'practice', 'exam', 'review'
let timerInterval = null;
let secondsElapsed = 0;
let examDurationSeconds = 9999 * 60; // 9999 mins from prompt

// DOM Elements
const qCategoryEl = document.getElementById('qCategory');
const qDifficultyEl = document.getElementById('qDifficulty');
const qIdEl = document.getElementById('qId');
const qTextEl = document.getElementById('qText');
const codeContainerEl = document.getElementById('codeContainer');
const qCodeEl = document.getElementById('qCode');
const optionsListEl = document.getElementById('optionsList');
const explanationBoxEl = document.getElementById('explanationBox');
const explanationTextEl = document.getElementById('explanationText');
const questionGridEl = document.getElementById('questionGrid');

const statTotalEl = document.getElementById('statTotal');
const statAttemptedEl = document.getElementById('statAttempted');
const statCorrectEl = document.getElementById('statCorrect');
const statAccuracyEl = document.getElementById('statAccuracy');
const timerDisplayEl = document.getElementById('timerDisplay');

const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const statusFilter = document.getElementById('statusFilter');

const flagBtn = document.getElementById('flagBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitExamBtn = document.getElementById('submitExamBtn');
const resetBtn = document.getElementById('resetBtn');
const modeBtn = document.getElementById('modeBtn');
const themeBtn = document.getElementById('themeBtn');

const scoreModal = document.getElementById('scoreModal');
const modalScoreText = document.getElementById('modalScoreText');
const modalScorePct = document.getElementById('modalScorePct');
const modalMsg = document.getElementById('modalMsg');
const closeModalBtn = document.getElementById('closeModalBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  populateCategoryFilter();
  renderGrid();
  renderQuestion();
  updateStats();
  startTimer();
  setupEventListeners();
});

// Populate categories dropdown dynamically
function populateCategoryFilter() {
  const categories = Array.from(new Set(questionsData.map(q => q.category)));
  categories.forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
  });
}

// Render Side Grid Palette
function renderGrid() {
  questionGridEl.innerHTML = '';
  filteredQuestions.forEach((q, idx) => {
    const btn = document.createElement('button');
    btn.className = 'grid-btn';
    btn.textContent = q.id;
    
    if (idx === currentIndex) btn.classList.add('active');
    if (flaggedQuestions.has(q.id)) btn.classList.add('flagged');
    
    if (userAnswers[q.id] !== undefined) {
      if (appMode === 'practice' || appMode === 'review') {
        if (userAnswers[q.id] === q.answer) {
          btn.classList.add('answered-correct');
        } else {
          btn.classList.add('answered-incorrect');
        }
      } else {
        btn.classList.add('answered-correct'); // exam mode neutral answered state
      }
    }

    btn.addEventListener('click', () => {
      currentIndex = idx;
      renderQuestion();
      renderGrid();
    });
    
    questionGridEl.appendChild(btn);
  });
  
  document.getElementById('gridCount').textContent = `${filteredQuestions.length} Qs`;
}

// Render Current Question
function renderQuestion() {
  if (filteredQuestions.length === 0) {
    qTextEl.textContent = 'No questions match the selected filter criteria.';
    optionsListEl.innerHTML = '';
    codeContainerEl.style.display = 'none';
    explanationBoxEl.style.display = 'none';
    return;
  }

  const q = filteredQuestions[currentIndex];
  qCategoryEl.textContent = q.category;
  qDifficultyEl.textContent = q.difficulty;
  qIdEl.textContent = `Q${q.id} of ${questionsData.length}`;
  qTextEl.textContent = q.question;

  if (q.code && q.code.trim().length > 0) {
    codeContainerEl.style.display = 'block';
    qCodeEl.textContent = q.code;
  } else {
    codeContainerEl.style.display = 'none';
  }

  // Update Flag Button
  if (flaggedQuestions.has(q.id)) {
    flagBtn.classList.add('btn-warning');
    flagBtn.innerHTML = '★ Flagged';
  } else {
    flagBtn.classList.remove('btn-warning');
    flagBtn.innerHTML = '☆ Flag';
  }

  // Options
  optionsListEl.innerHTML = '';
  const selectedAnswer = userAnswers[q.id];
  const isAnswered = selectedAnswer !== undefined;

  q.options.forEach((optText, optIdx) => {
    const optDiv = document.createElement('div');
    optDiv.className = 'option-item';
    
    const prefixDiv = document.createElement('div');
    prefixDiv.className = 'option-prefix';
    prefixDiv.textContent = String.fromCharCode(65 + optIdx); // A, B, C, D

    const textDiv = document.createElement('div');
    textDiv.className = 'option-text';
    textDiv.textContent = optText;

    optDiv.appendChild(prefixDiv);
    optDiv.appendChild(textDiv);

    // Styling based on mode and answered state
    if (appMode === 'practice' || appMode === 'review') {
      if (isAnswered) {
        optDiv.classList.add('disabled');
        if (optIdx === q.answer) {
          optDiv.classList.add('correct');
        } else if (optIdx === selectedAnswer) {
          optDiv.classList.add('incorrect');
        }
      }
    } else if (appMode === 'exam') {
      if (selectedAnswer === optIdx) {
        optDiv.classList.add('selected');
      }
    }

    // Click handler
    optDiv.addEventListener('click', () => {
      selectOption(q.id, optIdx);
    });

    optionsListEl.appendChild(optDiv);
  });

  // Explanation Box (Visible in Practice & Review mode if answered)
  if ((appMode === 'practice' || appMode === 'review') && isAnswered) {
    explanationBoxEl.style.display = 'block';
    explanationTextEl.textContent = q.explanation;
  } else {
    explanationBoxEl.style.display = 'none';
  }

  // Prev / Next button states
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === filteredQuestions.length - 1;
}

// Select an option
function selectOption(qId, optIdx) {
  if ((appMode === 'practice' || appMode === 'review') && userAnswers[qId] !== undefined) {
    return; // Lock answer in practice mode once chosen
  }
  
  userAnswers[qId] = optIdx;
  saveProgress();
  updateStats();
  renderGrid();
  renderQuestion();
}

// Update Dashboard Statistics
function updateStats() {
  const total = questionsData.length;
  const answered = Object.keys(userAnswers).length;
  let correctCount = 0;

  questionsData.forEach(q => {
    if (userAnswers[q.id] === q.answer) {
      correctCount++;
    }
  });

  const accuracy = answered > 0 ? Math.round((correctCount / answered) * 100) : 0;

  statTotalEl.textContent = total;
  statAttemptedEl.textContent = answered;
  statCorrectEl.textContent = correctCount;
  statAccuracyEl.textContent = `${accuracy}%`;
}

// Timer functionality
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const mins = Math.floor(secondsElapsed / 60);
    const secs = secondsElapsed % 60;
    timerDisplayEl.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }, 1000);
}

// Event Listeners Setup
function setupEventListeners() {
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      renderQuestion();
      renderGrid();
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentIndex < filteredQuestions.length - 1) {
      currentIndex++;
      renderQuestion();
      renderGrid();
    }
  });

  flagBtn.addEventListener('click', () => {
    const qId = filteredQuestions[currentIndex].id;
    if (flaggedQuestions.has(qId)) {
      flaggedQuestions.delete(qId);
    } else {
      flaggedQuestions.add(qId);
    }
    saveProgress();
    renderGrid();
    renderQuestion();
  });

  modeBtn.addEventListener('click', () => {
    if (appMode === 'practice') {
      appMode = 'exam';
      modeBtn.textContent = 'Mode: Exam';
      modeBtn.classList.replace('btn-primary', 'btn-success');
    } else {
      appMode = 'practice';
      modeBtn.textContent = 'Mode: Practice';
      modeBtn.classList.replace('btn-success', 'btn-primary');
    }
    renderGrid();
    renderQuestion();
  });

  themeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    themeBtn.textContent = newTheme === 'light' ? '☀️ Light' : '🌙 Dark';
  });

  submitExamBtn.addEventListener('click', () => {
    showExamResults();
  });

  resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all your practice progress?')) {
      userAnswers = {};
      flaggedQuestions.clear();
      secondsElapsed = 0;
      saveProgress();
      updateStats();
      renderGrid();
      renderQuestion();
    }
  });

  closeModalBtn.addEventListener('click', () => {
    scoreModal.classList.remove('active');
  });

  // Search & Filter event handlers
  searchInput.addEventListener('input', applyFilters);
  categoryFilter.addEventListener('change', applyFilters);
  statusFilter.addEventListener('change', applyFilters);
}

// Apply Filters
function applyFilters() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const catVal = categoryFilter.value;
  const statVal = statusFilter.value;

  filteredQuestions = questionsData.filter(q => {
    // Category match
    if (catVal !== 'all' && q.category !== catVal) return false;

    // Search match
    if (searchTerm) {
      const matchQ = q.question.toLowerCase().includes(searchTerm);
      const matchId = `q${q.id}`.includes(searchTerm) || `${q.id}` === searchTerm;
      const matchCode = q.code && q.code.toLowerCase().includes(searchTerm);
      if (!matchQ && !matchId && !matchCode) return false;
    }

    // Status match
    if (statVal === 'answered' && userAnswers[q.id] === undefined) return false;
    if (statVal === 'unanswered' && userAnswers[q.id] !== undefined) return false;
    if (statVal === 'flagged' && !flaggedQuestions.has(q.id)) return false;
    if (statVal === 'correct' && userAnswers[q.id] !== q.answer) return false;
    if (statVal === 'incorrect' && (userAnswers[q.id] === undefined || userAnswers[q.id] === q.answer)) return false;

    return true;
  });

  currentIndex = 0;
  renderGrid();
  renderQuestion();
}

// Show Exam Final Score Report
function showExamResults() {
  const total = questionsData.length;
  let correct = 0;
  questionsData.forEach(q => {
    if (userAnswers[q.id] === q.answer) correct++;
  });
  
  const pct = Math.round((correct / total) * 100);
  modalScoreText.textContent = `${correct} / ${total}`;
  modalScorePct.textContent = `${pct}% Correct`;
  scoreModal.style.setProperty('--score-pct', pct);

  if (pct >= 80) {
    modalMsg.textContent = '🎉 Exceptional Performance! You are fully prepared to train!';
  } else if (pct >= 60) {
    modalMsg.textContent = '👍 Solid Effort! Review flagged and incorrect questions to boost accuracy.';
  } else {
    modalMsg.textContent = '📚 Keep Practicing! Use Practice Mode and explanations to master concepts.';
  }

  appMode = 'review';
  modeBtn.textContent = 'Mode: Review';
  scoreModal.classList.add('active');
  renderGrid();
  renderQuestion();
}

// LocalStorage Persistence
function saveProgress() {
  const data = {
    userAnswers,
    flaggedQuestions: Array.from(flaggedQuestions),
    secondsElapsed
  };
  localStorage.setItem('ltm_java_mcq_progress', JSON.stringify(data));
}

function loadProgress() {
  const dataStr = localStorage.getItem('ltm_java_mcq_progress');
  if (dataStr) {
    try {
      const data = JSON.parse(dataStr);
      userAnswers = data.userAnswers || {};
      flaggedQuestions = new Set(data.flaggedQuestions || []);
      secondsElapsed = data.secondsElapsed || 0;
    } catch (e) {
      console.error('Failed to parse saved progress', e);
    }
  }
}
