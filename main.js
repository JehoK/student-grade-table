var table = document.querySelector("table");
var pTag = document.querySelector("d-none");
var gradeTable = new GradeTable(table, pTag);
var formElement = document.querySelector("form");

var myHeader = document.querySelector("header");
var newAverage = new PageHeader(myHeader);
var gradeForm = new GradeForm(formElement);
var app = new App(gradeTable, newAverage, gradeForm);




app.start();
