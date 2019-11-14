<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: root
  Date: 11/11/19
  Time: 9:51 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html><html>
<head>
    <meta charset="UTF-8" />
    <title>Hello Java Servlet 4.0</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style.css"/>
</head>
<body>
<div class="jumbotron">
    <h1 class="display-4">Hello, HttpServlet 4.0!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="${pageContext.request.contextPath}/contact-us.jsp" role="button">Contact Us</a>
    </div>

</body>
</html>
