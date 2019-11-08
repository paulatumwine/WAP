$(function () {
    setInterval(function () { $("#clockContainer").html(new Date()) }, 500);

    displayStudents();

    const form = $("#addstudentform")
    form.submit(captureValues, event)

});

function displayStudents() {
    const url = window.location.href.replace("spa/index.html", "data/students.json")
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
    })
        .done(function (students) {
            students.forEach(student => displayStudent(student))
        })
        .fail(function (xhr, status, errorThrown) {
            console.log(`Error:  + ${errorThrown}\nStatus: ${status}`);
            console.dir(xhr);
        })
}

function displayStudent(student) {
    const li = `<li class="list-group-item">${student.studentId} - ${student.firstName}</li>`;
    const ul = $("ul#users");
    ul.append(li);
}

function captureValues(event) {
    const student = $("#studentid")
    const name = $("#firstname")

    if (student.val() != "" && name.val() != "") {
        const detail = { "studentId": student.val(), "firstName": name.val() }
        // students.push(detail) // superfluous - we have no storage in this case
        displayStudent(detail)
    }

    // event.preventDefault() // or return false
    return false;
}
