const tableElement = document.querySelector("table");
const headerElement = document.querySelector("header");
const formElement = document.querySelector("form");
const noGradeElement = document.querySelector("p");

const gradeForm = new GradeForm(formElement);
const pageHeader = new PageHeader(headerElement);
const gradeTable = new GradeTable(tableElement, noGradeElement);
const app = new App(gradeTable, pageHeader, gradeForm);

app.start();
