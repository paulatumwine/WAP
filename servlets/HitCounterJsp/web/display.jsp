<%--
  Created by IntelliJ IDEA.
  User: root
  Date: 11/13/19
  Time: 3:05 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<head>
    <title>WAP :: Contact Us</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>
<body>
<div class="card">
    <div class="card-header">
        Thank You! Your message has been received as follows:
    </div>
    <div class="card-body">
        <h5 class="card-title">Name: ${pageContext.request.getParameter("names")}</h5>
        <p class="card-text text-muted">Gender: ${pageContext.request.getParameter("gender")}</p>
        <p class="card-text text-muted">Category: ${pageContext.request.getParameter("category")}</p>
        <p class="card-text text-muted">Message: ${pageContext.request.getParameter("message")}</p>
        <p class="card-text>&nbsp;</p>
            <p class=" card-text>Please feel free to <a href="${pageContext.request.contextPath}/contact-us">Contact
            Us</a> again</p>
    </div>
</div>
<div class="counters">
    <p class="text-muted float-left">Hit Count for this page: ${pageContext.request.getAttribute("counter")}
    </p>
    <p class="text-muted float-right">Total Hit Count for the entire
        WebApp: ${pageContext.servletContext.getAttribute("counter")}</p>
</div>
</body>
</html>
