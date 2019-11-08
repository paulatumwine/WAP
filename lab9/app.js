$(function () {
    setInterval(function () { $("#clockContainer").html(new Date()) }, 500);

    initStudents();

    const form = $("#addstudentform")
    form.submit(captureValues, event)
});

function initStudents() {
    const url = window.location.href.replace("lab9/index.html", "data/students.json")
    $.ajax({
        url: url,
        type: "GET",
        dataType: "json",
    })
        .done(function (students) {
            const cache = localStorage.getItem("studentData")
            const data = JSON.parse(cache)
            if (cache == null || !(data instanceof Array)) {
                localStorage.removeItem("studentData")
                const store = JSON.stringify(students)
                window.localStorage.setItem("studentData", store)
            }
            displayStudents()
        })
        .fail(function (xhr, status, errorThrown) {
            console.log(`Error: ${errorThrown}\nStatus: ${status}`);
            console.dir(xhr);
        })
}

function displayStudents() {
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
    const student = $("#studentid")
    const name = $("#firstname")

    if (student.val() != "" && name.val() != "") {
        const detail = { "studentId": student.val(), "firstName": name.val() }
        appendToLocalStorage(detail)
        displayStudent(detail)
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
