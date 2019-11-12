import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "DisplayServlet", urlPatterns = {"/display"})
public class DisplayServlet extends HttpServlet {

    int counter;

    @Override
    public void init() throws ServletException {
        super.init();
        this.counter = 0;
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.counter++;
        response.setContentType("text/html");
        response.setCharacterEncoding("UTF-8");

        try(PrintWriter out = response.getWriter()) {
            String name = request.getParameter("names");
            String gender = request.getParameter("gender");
            String category = request.getParameter("category");
            String message = request.getParameter("message");
            Integer overallCounter = (Integer) request.getAttribute("counter");
            String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();

            out.append("  <head>\n" +
                    "    <title>WAP :: Contact Us</title>\n" +
                    "    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n" +
                    "          integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + baseUrl + "/css/style.css\"/>\n" +
                    "</head>\n" +
                    "  <body>\n" +
                    "<div class=\"card\">\n" +
                    "      <div class=\"card-header\">\n" +
                    "        Thank You! Your message has been received as follows:\n" +
                    "      </div>\n" +
                    "      <div class=\"card-body\">\n" +
                    "        <h5 class=\"card-title\">Name: " + name + "</h5>\n" +
                    "        <p class=\"card-text text-muted\">Gender: " + gender +"</p>\n" +
                    "        <p class=\"card-text text-muted\">Category: " + category +"</p>\n" +
                    "        <p class=\"card-text text-muted\">Message: " + message +"</p>\n" +
                    "        <p class=\"card-text>&nbsp;</p>\n" +
                    "        <p class=\"card-text>Please feel free to <a href=\"" + request.getContextPath() + "/contact-us/\">Contact Us</a> again</p>\n" +
                    "      </div>\n" +
                    "    </div>"+
                    "\n" +
                    "  <div class=\"counters\">\n" +
                    "      <p class=\"text-muted float-left\">Hit Count for this page: " + (this.counter == 0 ? "--" : this.counter) + "</p>\n" +
                    "      <p class=\"text-muted float-right\">Total Hit Count for the entire WebApp: " + (overallCounter == null || overallCounter == 0 ? "--" : overallCounter) + "</p>\n" +
                    "  </div>" +
                    "  </body>\n" +
                    "</html>");
            out.flush();
        }
    }
}
