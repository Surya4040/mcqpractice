const fs = require('fs');
const path = require('path');

const text = fs.readFileSync('extracted_pdf_text.txt', 'utf8');

// Remove header/footer noise
let cleaned = text.replace(/-- \d+ of \d+ --/g, '');
cleaned = cleaned.replace(/Section Summary[\s\S]*?Additional Instructions:\s*None/g, '');
cleaned = cleaned.replace(/Section 1 - LTM_JAVA_MCQ_PRACTICE_FOR_TRAINER/g, '');
cleaned = cleaned.replace(/LTM_JAVA_MCQ_PRACTICE_FOR_TRAINER/g, '');
cleaned = cleaned.replace(/Test Summary/g, '');

const qRegex = /Q(\d+)\.\s+/g;
const indices = [];
let match;

while ((match = qRegex.exec(cleaned)) !== null) {
  indices.push({ qNum: parseInt(match[1]), index: match.index, rawHeader: match[0] });
}

console.log(`Extracted ${indices.length} question blocks.`);

const allQuestions = [];

for (let i = 0; i < indices.length; i++) {
  const qNum = indices[i].qNum;
  const start = indices[i].index + indices[i].rawHeader.length;
  const end = (i + 1 < indices.length) ? indices[i+1].index : cleaned.length;
  const rawBlock = cleaned.slice(start, end).trim();

  // Parse lines
  const lines = rawBlock.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  let questionText = '';
  let codeSnippet = '';
  let options = [];
  let solutionIndex = -1;

  // Separate question title/code from options
  // Look for lines containing "Solution" or "No Solution" or option patterns
  let currentOption = '';
  let isCode = false;
  let codeLines = [];
  let inOptionsPhase = false;

  for (let j = 0; j < lines.length; j++) {
    const line = lines[j];

    // Check if line is line numbers like "1", "2", "3"...
    if (!inOptionsPhase && /^\d+$/.test(line)) {
      isCode = true;
      continue;
    }

    if (line === 'Solution') {
      inOptionsPhase = true;
      if (currentOption) {
        options.push(currentOption);
        solutionIndex = options.length - 1;
        currentOption = '';
      }
      continue;
    }

    if (line === 'No Solution') {
      inOptionsPhase = true;
      if (currentOption) {
        options.push(currentOption);
        currentOption = '';
      }
      continue;
    }

    if (!inOptionsPhase) {
      if (isCode) {
        codeLines.push(line);
      } else {
        if (questionText) questionText += ' ';
        questionText += line;
      }
    } else {
      if (currentOption) currentOption += ' ';
      currentOption += line;
    }
  }

  if (currentOption) {
    options.push(currentOption);
  }

  // Cleanup question text and options
  questionText = questionText.trim();
  codeSnippet = codeLines.join('\n').trim();

  allQuestions.push({
    id: qNum,
    questionText,
    codeSnippet,
    rawOptions: options,
    solutionIndex,
    rawBlock
  });
}

console.log(`Successfully split ${allQuestions.length} questions.`);
fs.writeFileSync('parsed_blocks.json', JSON.stringify(allQuestions, null, 2), 'utf8');
