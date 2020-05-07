
class App {
  constructor(gradeTable, pageHeader){
    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
  }

  handleGetGradeError(error) {
    console.error(error);
  }
  handleGetGradeSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var total = 0;
    for (let i =0; i<grades.length; i++){
      total += grades[i].grade;
    }
    var average = (total / grades.length)
    this.pageHeader.updateAverage(average);
  }
  getGrade(){
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "2aoZsbBj" },
      success: this.handleGetGradeSuccess,
      error: this.handleGetGradeError
    })
  }
  start(){
    this.getGrade();
  }
}
