class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener("submit", this.handleSubmit);
  }
  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit (event) {
    event.preventDefault();
    console.log("hi!");

    var formData = new FormData(event.target);
    var newName = formData.get("name");
    var newCourse = formData.get("course");
    var newGrade = formData.get("grade");

    this.createGrade(newName, newCourse, newGrade);
    event.target.reset();
  }
}
