const PDFDocument = require('pdfkit');
const fs = require('fs');
const htmlContent = fs.readFileSync('C:\Users\magre\OneDrive\Área de Trabalho\CvCVCV\index.html')

const doc = new PDFDocument();
doc.pipe(fs.createWriteStream('output.pdf'));

doc.text(htmlContent); // Adicione o seu código HTML aqui

doc.end();
console.log('PDF criado com sucesso!');
