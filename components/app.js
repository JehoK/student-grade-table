
class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.handleGetGradeError = this.handleGetGradeError.bind(this);
    this.handleGetGradeSuccess = this.handleGetGradeSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
    var average = Math.floor(total / grades.length);
    this.pageHeader.updateAverage(average);
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrade();
  }
  deleteGrade(id){
    $.ajax({
      method: "DELETE",
      url: `https://sgt.lfzprototypes.com/api/grades/${id}`,
      headers: { "X-Access-Token": "2aoZsbBj" },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError
    });
  }
  handleDeleteGradeError(error){
    console.error(error);
  }
  handleDeleteGradeSuccess(){
    this.getGrade();
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
    this.gradeForm.onsubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }

  createGrade(name, course, grade){
    console.log(name, course, grade)
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers: { "X-Access-Token": "2aoZsbBj" },
      data: {
        "name": name,
        "course": course,
        "grade":  grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
}
