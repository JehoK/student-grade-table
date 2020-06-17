var tableElement = document.querySelector("table");
var headerElement = document.querySelector("header");
var formElement = document.querySelector("form");
var pElement = document.querySelector("p");

var gradeForm = new GradeForm(formElement);
var pageHeader = new PageHeader(headerElement);
var gradeTable = new GradeTable(tableElement, pElement);
var app = new App(gradeTable, pageHeader, gradeForm);

app.start();
