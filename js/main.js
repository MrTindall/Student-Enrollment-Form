const studentForm = document.getElementById("studentForm");

//Creating an empty array
const students = [];

//studentForm submit function
studentForm.onsubmit = function(e){
    e.preventDefault();

    //Grabs student first name, last name, program, and enroll date
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const program = document.getElementById("programs").value;
    const enrollDate = document.getElementById("enrollDate").valueAsDate;

    //creating new students
    const newStudent = new Student(firstName, lastName, enrollDate, program);

    //Push method to add student to students array
    students.push(newStudent);
    console.log(students);

    const studentElement = newStudent.createStudent();

    studentElement.onclick = function(){
        alert(newStudent.firstName + " " + newStudent.lastName);
    }

    document.getElementById("enrolledStudent").append(studentElement);

    studentForm.reset();
}

//Creating a constructor for new students
function Student(firstName, lastName, enrollDate, program){
    this.firstName = firstName;
    this.lastName = lastName;
    this.enrollDate = enrollDate;
    this.program = program;

//Appending studentDiv to html document
    this.createStudent = function(){
        const studentDiv = document.createElement("div");
        studentDiv.classList.add("student");

        studentDiv.innerHTML = `
        <p class="student-name">Name: ${this.firstName + " " + this.lastName}</p>
        <p class="student-program">Program: ${this.program}</p>
        <p class="student-enrollDate">EnrollDate: ${this.enrollDate.toLocaleDateString()}</p>
        `
        return studentDiv;
    }
}
