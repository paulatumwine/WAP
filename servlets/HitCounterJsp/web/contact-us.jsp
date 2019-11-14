<%@ page import="java.util.List" %><%--
  Created by IntelliJ IDEA.
  User: root
  Date: 11/11/19
  Time: 9:51 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <%
        String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();
    %>
    <title>WAP :: Contact Us</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="<% out.print(baseUrl); %>/css/style.css"/>
</head>
<body>
<%! int counter = 1; %>
<h1>Contact Us</h1>
<form method="post" action="${pageContext.request.contextPath}/validate/">
    <%
        List<String> errors = (List) request.getAttribute("errors");
        if (errors != null && errors.size() > 0) {
            for (String error : errors) {
                out.print("<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">");
                out.print(error);
                out.print("</div>");
            }
        }
    %>
    <div class="form-group">
        <label for="names">Name</label>
        <input type="text" class="form-control" id="names" name="names" placeholder="Name"
               value="<%
          String names = pageContext.getRequest().getParameter("names");
          if (names != null) out.print(names);
      %>">
    </div>
    <div class="form-group">
        <label for="male">Gender</label>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="male" name="gender" value="male" class="custom-control-input" <%
        String gender = pageContext.getRequest().getParameter("gender");
        if (gender != null && gender.equals("male")) {
            out.print("checked");
        }
        %>>
            <label class="custom-control-label" for="male">Male</label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
            <input type="radio" id="female" name="gender" value="female" class="custom-control-input" <%
        if (gender != null && gender.equals("female")) {
            out.print("checked");
        }
        %>>
            <label class="custom-control-label" for="female">Female</label>
        </div>
    </div>
    <div class="form-group">
        <label for="category">Category</label>
        <% String category = pageContext.getRequest().getParameter("category"); %>
        <select class="form-control" id="category" name="category">
            <option value="" selected>Select a category</option>
            <option value="feedback" <% if (category != null && category.equals("feedback")) out.print("selected"); %>>
                Feedback
            </option>
            <option value="inquiry" <% if (category != null && category.equals("inquiry")) out.print("selected"); %>>
                Inquiry
            </option>
            <option value="complaint" <% if (category != null && category.equals("complaint"))
                out.print("selected"); %>>Complaint
            </option>
        </select>
    </div>
    <div class="form-group">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" rows="3" name="message" placeholder="Message goes here..."><%
            String message = pageContext.getRequest().getParameter("message");
            if (message != null) out.print(message);
        %></textarea>
    </div>
    <div class="form-group">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
<div class="counters">
    <p class="text-muted float-left">Hit Count for this page: <%= counter++ %>
    </p>
    <p class="text-muted float-right">Total Hit Count for the entire
        WebApp: ${pageContext.request.getAttribute("counter")}</p>
</div>
</body>
</html>
