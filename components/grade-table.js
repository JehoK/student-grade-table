class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }
  updateGrades(grades) {
    var tbody = document.querySelector("tbody");
    for (var i = 0; i < grades.length; i++) {

  updateGrades(grades){
    console.log(grades);
    var tbody = document.querySelector("tbody");
    for(var i=0; i<grades.length; i++){

      var tbodyRow = document.createElement("tr");
      var student = document.createElement("td");
      var course = document.createElement("td");
      var studentGrades = document.createElement("td");


      student.textContent = grades[i].name;
      course.textContent = grades[i].course;
      studentGrades.textContent = grades[i].grade;

      tbodyRow.append(student, course, studentGrades);
      tbody.append(tbodyRow);
    }
  }
}
