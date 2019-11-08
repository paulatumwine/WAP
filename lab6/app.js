function displayTime() {
    var today = new Date()
    var d = today.toDateString()
    var t = today.toTimeString()
    document.getElementById('clockContainer').innerHTML = d + " " + t
    setTimeout(displayTime, 500)
}

function displayStudents() {
    students.forEach(student => displayStudent(student))
}

function displayStudent(student) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(student.studentId + " - " + student.firstName));
    li.setAttribute("class", "list-group-item");

    let ul = document.getElementById("users");
    ul.appendChild(li);    
}

function captureValues(event) {
    event.preventDefault()
    let student = document.getElementById("studentid").value
    let name = document.getElementById("firstname").value
    let detail = {"studentId": student, "firstName": name}
    students.push(detail)
    displayStudent(detail)
}

const students = [
    { "studentId": "000-98-0001", "firstName": "James" },
    { "studentId": "000-98-0002", "firstName": "Anna" },
    { "studentId": "000-98-0003", "firstName": "Jeffrey" }
];

/* 
// initial way -- does not seem to work!
document.body.addEventListener("load", function(){
    displayTime()
    displayStudents()
}); */

/* 
// this works...
document.addEventListener('DOMContentLoaded', function() {
    displayTime()
    displayStudents()
}); */

// this also works...
window.addEventListener('load', function () {
    displayTime();
    displayStudents();

    (function () {
        let form = document.getElementById("addstudentform")
        form.addEventListener("submit", captureValues, event)
    })();
});