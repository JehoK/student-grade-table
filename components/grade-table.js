class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }
  updateGrades(grades) {
    // var tbody = document.querySelector("tbody");
    this.tableElement.lastElementChild.textContent = " ";
    for (let i = 0; i < grades.length; i++) {
      this.renderGradeRow(grades[i], this.deleteGrade);
    }
    if(grades < 1) {
      this.noGradesElement.className = " ";
    }else {
      this.noGradesElement.className = "d-none";
    }
  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow (data, deleteGrade) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    const btnD = document.createElement("button");

    td1.textContent = data.name;
    td2.textContent = data.course;
    td3.textContent = data.grade;
    btnD.textContent = "Delete";
    btnD.className = "btn btn-danger";

    td4.append(btnD);
    tr.append(td1, td2, td3, td4);
    this.tableElement.lastElementChild.append(tr);

    btnD.addEventListener("click", () => {
      deleteGrade(data.id);
    });

    return tr;
  }
}
