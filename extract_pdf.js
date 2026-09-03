const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.join(__dirname, 'ms2_easy.pdf');
const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
  console.log('Total pages:', data.numpages);
  console.log('Total text length:', data.text.length);
  fs.writeFileSync(path.join(__dirname, 'extracted_pdf_text.txt'), data.text, 'utf8');
  console.log('Saved text to extracted_pdf_text.txt');
}).catch(function(err) {
  console.error('PDF parsing error:', err);
});
