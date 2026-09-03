const fs = require('fs');
const path = require('path');

const fullText = fs.readFileSync('extracted_pdf_text.txt', 'utf8');

// Find boundary between Questions Section and Solution Section
const solutionSecIdx = fullText.search(/\nQ1\s*\nSolution/i);
const qTextPart = solutionSecIdx !== -1 ? fullText.slice(0, solutionSecIdx) : fullText;
const solutionPart = solutionSecIdx !== -1 ? fullText.slice(solutionSecIdx) : '';

// 1. Parse Solutions from solutionPart
const solutionMap = {}; // qNum -> correctOptionText
const solQBlocks = solutionPart.split(/\n(?=Q\d+[\s\n])/g);

solQBlocks.forEach(block => {
  const matchNum = block.match(/^Q(\d+)/);
  if (matchNum) {
    const qNum = parseInt(matchNum[1]);
    const lines = block.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    // In solution section, lines follow pattern: Q<num> \n Solution \n No Solution \n <Correct Text> ...
    // Find index of 'Solution'
    const solIdx = lines.indexOf('Solution');
    if (solIdx !== -1 && solIdx + 2 < lines.length) {
      // The text following Solution / No Solution is the answer option text
      const ansLines = [];
      for (let k = solIdx + 1; k < lines.length; k++) {
        if (lines[k] === 'No Solution') continue;
        ansLines.push(lines[k]);
      }
      solutionMap[qNum] = ansLines.join(' ');
    }
  }
});

console.log(`Parsed official solution mappings for ${Object.keys(solutionMap).length} questions.`);

// 2. Parse Questions from qTextPart
let cleanedQ = qTextPart.replace(/-- \d+ of \d+ --/g, '');
cleanedQ = cleanedQ.replace(/LTM_JAVA_MCQ_PRACTICE_FOR_TRAINER/g, '');
cleanedQ = cleanedQ.replace(/Test Summary[\s\S]*?Additional Instructions:\s*None/g, '');

const qRegex = /Q(\d+)\.\s+/g;
const indices = [];
let match;

while ((match = qRegex.exec(cleanedQ)) !== null) {
  indices.push({ qNum: parseInt(match[1]), index: match.index, rawHeader: match[0] });
}

console.log(`Found ${indices.length} question blocks in Question Section.`);

const parsedQuestions = [];

for (let i = 0; i < indices.length; i++) {
  const qNum = indices[i].qNum;
  const start = indices[i].index + indices[i].rawHeader.length;
  const end = (i + 1 < indices.length) ? indices[i+1].index : cleanedQ.length;
  const rawBlock = cleanedQ.slice(start, end).trim();

  // Split into question header vs options
  // Options are typically the last 4 distinct blocks or lines in the block
  const lines = rawBlock.split('\n').map(l => l.trim()).filter(l => l.length > 0);

  parsedQuestions.push({
    id: qNum,
    lines,
    rawBlock
  });
}

fs.writeFileSync('solution_map_debug.json', JSON.stringify({
  solCount: Object.keys(solutionMap).length,
  sampleSol1: solutionMap[1],
  sampleSol16: solutionMap[16],
  sampleSol100: solutionMap[100],
  sampleSol446: solutionMap[446]
}, null, 2));

console.log('Saved solution map debug.');
