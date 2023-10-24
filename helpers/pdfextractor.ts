import { PDFExtract, PDFExtractOptions } from "pdf.js-extract";
const pdfExtract = new PDFExtract();
const options: PDFExtractOptions = {}; /* see below */
pdfExtract
  .extract("test.pdf", options)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
