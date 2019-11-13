
const url = window.location.href + "student-data/"

$(function () {
    setInterval(function () { $("#clockContainer").html(new Date()) }, 500);

    initStudents();

    const form = $("#addstudentform")
    form.submit(captureValues, event)
});

function initStudents() {
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
    })
        .done(function (students) {
            successHandler(students)
        })
        .fail(function (xhr, status, errorThrown) {
            console.log(`Error: ${errorThrown}\nStatus: ${status}`);
            console.dir(xhr);
        })
}

function successHandler(students) {
    /*const cache = localStorage.getItem("studentData")
    const data = JSON.parse(cache)
    if (cache == null || !(data instanceof Array)) {
        localStorage.removeItem("studentData")
        const store = JSON.stringify(students)
        window.localStorage.setItem("studentData", store)
    }
    displayStudents()*/

    localStorage.removeItem("studentData") // always replace localstorage content with whatever we get back from the server
    const store = JSON.stringify(students)
    window.localStorage.setItem("studentData", store)
    displayStudents()
}

function displayStudents() {
    const ul = $("ul#users");
    ul.html("") // clear user list container first
    ul.append(`<li class="list-group-item active">Student Names</li>`);

    let students = localStorage.getItem("studentData")
    students = JSON.parse(students)
    students.forEach(student => displayStudent(student))
}

function displayStudent(student) {
    const li = `<li class="list-group-item">${student.studentId} - ${student.firstName}</li>`;
    const ul = $("ul#users");
    ul.append(li);
}

function captureValues(event) {
    const student = $("#studentId")
    const name = $("#firstName")

    if (student.val() != "" && name.val() != "") {
        const detail = { "studentId": student.val(), "firstName": name.val() }
        // idea is to update UI right away and proceed with persistence behind the scenes
        $.ajax({
            url: url,
            type: "POST",
            dataType: "json",
            data: $("#addstudentform").serialize()
        })
            .done(function (students) {
                successHandler(students)
            })
            .fail(function (xhr, status, errorThrown) {
                console.log(`Error: ${errorThrown}\nStatus: ${status}`);
                console.dir(xhr);
            })
        displayStudent(detail)
        appendToLocalStorage(detail)
    }
    return false;
}

function appendToLocalStorage(student) {
    const data = localStorage.getItem("studentData")
    if (data != null) {
        let students = JSON.parse(data)
        students.push(student)
        localStorage.setItem("studentData", JSON.stringify(students))
    } else {
        let students = [student]
        window.localStorage.setItem("studentData", JSON.stringify(students))
    }
}
