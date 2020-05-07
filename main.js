var table = document.querySelector("table");
var gradeTable = new GradeTable(table);


var myHeader =document.querySelector("header");
var newAverage = new PageHeader(myHeader);
var app = new App(gradeTable, newAverage);

app.start();
