
class App {
  constructor(gradeTable){
    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
  }

  handleGetGradeError(error) {
    console.error(error);
  }
  handleGetGradeSuccess(grades) {
    this.gradeTable.updateGrades(grades);
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
