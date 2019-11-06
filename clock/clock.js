// NUMBER 12
function startTime() {
    var today = new Date()
    var Y = today.getFullYear()
    var M = today.getMonth() + 1
    var d = today.getDate()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timeContainer').innerHTML = Y + "-" + M + "-" + d + " " + h + ":" + m + ":" + s
    var t = setTimeout(startTime, 500)
  }

  function checkTime(i) {
    if (i < 10) i = "0" + i;  // add zero in front of numbers < 10
    return i;
  }
