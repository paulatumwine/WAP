<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: root
  Date: 11/12/19
  Time: 5:38 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type" />

    <title>Paul :: Lab11 - Server-side data processing using Servlets</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>

<body>
<h1>Lab 11</h1>
<p id="clockContainer">Clock loading...</p>
<form id="addstudentform" method="post" action="${pageContext.request.contextPath}/student-data/">
    <%
        List<String> errors = (List) request.getAttribute("errors");
        if (errors != null && errors.size() > 0) {
            for (String error: errors) {
                out.print("<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">");
                out.print(error);
                out.print("</div>");
            }
        }
    %>
    <div class="form-group">
        <label for="studentId">Student ID</label>
        <input type="text" class="form-control" name="studentId" id="studentId" aria-describedby="studentid"
               placeholder="000-XX-XXXX" pattern="[0-9]{3}-[A-Z0-9]{2}-[A-Z0-9]{4}" required/>
        <small class="form-text text-muted">Your unique student Identification number.</small>
    </div>
    <div class="form-group">
        <label for="firstName">First Name</label>
        <input type="test" class="form-control" name="firstName" id="firstName" placeholder="e.g. John" pattern="[a-zA-Z\s\.]+" required/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>

<ul class="list-group" id="users"></ul>
</body>
<script src="js/jquery.js"></script>
<script src="js/app.js"></script>

</html>
