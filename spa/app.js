window.addEventListener('load', function () {
    setInterval(function() {
        document.getElementById('clockContainer').textContent = new Date()
    }, 500);

    /* displayStudents();

    (function () {
        let form = document.getElementById("addstudentform")
        form.addEventListener("submit", captureValues, event)
    })(); */
});
