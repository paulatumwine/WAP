import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "HelloServlet", urlPatterns = {"/index.html"})
public class HelloServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");

        try (PrintWriter writer = response.getWriter()) {
            String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();

            writer.append("<!DOCTYPE html><html>");
            writer.append("<head>");
            writer.append("<meta charset=\"UTF-8\" />");
            writer.append("<title>Hello Java Servlet 4.0</title>");
            writer.append("    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n" +
                    "          integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + baseUrl + "/css/style.css\"/>\n");
            writer.append("</head>");
            writer.append("<body>");
            writer.append("<div class=\"jumbotron\">\n" +
                    "  <h1 class=\"display-4\">Hello, HttpServlet 4.0!</h1>\n" +
                    "  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n" +
                    "  <hr class=\"my-4\">\n" +
                    "  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n" +
                    "  <a class=\"btn btn-primary btn-lg\" href=\"" + baseUrl + "/contact-us/\" role=\"button\">Contact Us</a>\n" +
                    "</div>");

            writer.append("</body>");
            writer.append("</html>");
        }
    }
}
