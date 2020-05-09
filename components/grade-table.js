class GradeTable{
  constructor(tableElement, noGradesElement){
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades){
    var tbody = this.tableElement.querySelector("tbody");
    tbody.textContent= " ";
    var hidden = document.querySelector(".d-none");
    if(!grades.length){
      hidden.className = " ";
    }else {
      hidden.className = "d-none";
    }
    for (var i =0; i<grades.length; i++){
      // var tr = document.createElement("tr");
      // var name = document.createElement("td");
      // var course = document.createElement("td");
      // var grade = document.createElement("td");

      // name.textContent = grades[i].name;
      // course.textContent = grades[i].course;
      // grade.textContent = grades[i].grade;

      // tr.append(name, course, grade);

      var tr = this.renderGradeRow(grades[i],this.deleteGrade);

      tbody.append(tr);
    }
  }

  onDeleteClick(deleteGrade){
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade){
    var tr = document.createElement("tr");
    var name = document.createElement("td");
    var course = document.createElement("td");
    var grade = document.createElement("td");
    var deleteTd = document.createElement("td");
    var deleteButton = document.createElement("button");

    name.textContent = data.name;
    course.textContent = data.course;
    grade.textContent = data.grade;

    deleteButton.addEventListener("click", function(){
      deleteGrade(data.id);
    });

    deleteButton.textContent = "Delete";
    deleteTd.append(deleteButton);
    tr.append(name, course, grade, deleteTd);

    return tr;
  }
}
