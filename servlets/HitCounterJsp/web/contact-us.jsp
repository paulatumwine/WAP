<%--
  Created by IntelliJ IDEA.
  User: root
  Date: 11/11/19
  Time: 9:51 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>WAP :: Contact Us</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/style.css"/>
</head>
<body>
<%--<c:set var="counter" scope="page" value="0"/>--%>
<h1>Contact Us</h1>
<form method="post" action="${pageContext.request.contextPath}/validate/">
    <c:forEach var="error" items="${requestScope.errors}">
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                ${error}
        </div>
    </c:forEach>
    <div class="form-group">
        <label for="names">Name</label>
        <input type="text" class="form-control" id="names" name="names" placeholder="Name"
               value="${pageContext.request.getParameter("names")}">
    </div>
    <div class="form-group">
        <label for="male">Gender</label>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="male" name="gender" value="male"
                   class="custom-control-input"
            <c:if test='${pageContext.request.getParameter("gender").equals("male")}'>
                <c:out value="checked"/>
            </c:if>>
            <label class="custom-control-label" for="male">Male</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="female" name="gender" value="female"
                   class="custom-control-input"
            <c:if test='${pageContext.request.getParameter("gender").equals("female")}'>
                <c:out value="checked"/>
            </c:if>>
            <label class="custom-control-label" for="female">Female</label>
        </div>
    </div>
    <div class="form-group">
        <label for="category">Category</label>
        <select class="form-control" id="category" name="category">
            <option value="" selected>Select a category</option>
            <option value="feedback" <c:if test='${pageContext.request.getParameter("category").equals("feedback")}'>
                <c:out value="selected"/></c:if>>Feedback
            </option>
            <option value="inquiry" <c:if test='${pageContext.request.getParameter("category").equals("inquiry")}'>
                <c:out value="selected"/></c:if>>Inquiry
            </option>
            <option value="complaint" <c:if test='${pageContext.request.getParameter("category").equals("complaint")}'>
                <c:out value="selected"/></c:if>>Complaint
            </option>
        </select>
    </div>
    <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" rows="3" name="message"
                  placeholder="Message goes here...">${pageContext.request.getParameter("message")}</textarea>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
<div class="counters">
    <p class="text-muted float-left">Hit Count for this page: ${pageContext.request.getAttribute("counter")}
    </p>
    <p class="text-muted float-right">Total Hit Count for the entire
        WebApp: ${pageContext.servletContext.getAttribute("counter")}</p>
</div>
</body>
</html>
