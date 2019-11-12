import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(name = "ContactUsServlet", urlPatterns = {"/contact-us/"})
public class ContactUsServlet extends HttpServlet {

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

        try (PrintWriter writer = response.getWriter()) {
            String names = request.getParameter("names");
            String gender = request.getParameter("gender");
            String category = request.getParameter("category");
            String message = request.getParameter("message");
            Integer overallCounter = (Integer) request.getAttribute("counter");
            String baseUrl = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + request.getContextPath();

            writer.append("<html>\n" +
                    "  <head>\n" +
                    "    <title>WAP :: Contact Us</title>\n" +
                    "    <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"\n" +
                    "          integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n" +
                    "    <link rel=\"stylesheet\" type=\"text/css\" href=\"" + baseUrl + "/css/style.css\"/>\n" +
                    "  </head>\n" +
                    "  <body>\n" +
                    "  <h1>Contact Us</h1>\n" +
                    "  <form method=\"post\" action=\"" + baseUrl + "/validate/\">");

            List<String> errors = (List) request.getAttribute("errors");
            if (errors != null && errors.size() > 0) {
                for (String error : errors) {
                    writer.append("<div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">");
                    writer.append(error);
                    writer.append("</div>");
                }
            }
                    writer.append("    <div class=\"form-group\">\n" +
                    "      <label for=\"names\">Name*</label>\n" +
                    "      <input type=\"text\" class=\"form-control\" id=\"names\" name=\"names\" placeholder=\"Name\"");
            writer.append(" value=\"" + (names != null ? names : "") + "\"/>\n");
                    writer.append("    </div>\n" +
                    "    <div class=\"form-group\">\n" +
                    "      <label for=\"male\">Gender*</label>\n" +
                    "      <div class=\"custom-control custom-radio custom-control-inline\">\n" +
                    "        <input type=\"radio\" id=\"male\" name=\"gender\" value=\"male\" checked class=\"custom-control-input\">\n" +
                    "        <label class=\"custom-control-label\" for=\"male\">Male</label>\n" +
                    "      </div>\n" +
                    "      <div class=\"custom-control custom-radio custom-control-inline\">\n" +
                    "        <input type=\"radio\" id=\"female\" name=\"gender\" value=\"female\" class=\"custom-control-input\">\n" +
                    "        <label class=\"custom-control-label\" for=\"female\">Female</label>\n" +
                    "      </div>\n" +
                    "    </div>\n" +
                    "    <div class=\"form-group\">\n" +
                    "      <label for=\"category\">Category*</label>\n" +
                    "      <select class=\"form-control\" id=\"category\" name=\"category\">\n" +
                    "        <option value=\"\" selected>Select a category</option>\n" +
                    "        <option value=\"feedback\">Feedback</option>\n" +
                    "        <option value=\"inquiry\">Inquiry</option>\n" +
                    "        <option value=\"complaint\">Complaint</option>\n" +
                    "      </select>\n" +
                    "    </div>\n" +
                    "    <div class=\"form-group\">\n" +
                    "      <label for=\"message\">Message*</label>\n" +
                    "      <textarea class=\"form-control\" id=\"message\" rows=\"3\" name=\"message\" placeholder=\"Message goes here...\">");
            writer.append(message != null ? message : "" + "\n");
                    writer.append("</textarea>\n" +
                    "    </div>\n" +
                    "    <div class=\"form-group\">\n" +
                    "      <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n" +
                    "    </div>\n" +
                    "  </form>\n" +
                    "\n" +
                    "  <div class=\"counters\">\n" +
                    "      <p class=\"text-muted float-left\">Hit Count for this page: " + (this.counter == 0 ? "--" : this.counter) + "</p>\n" +
                    "      <p class=\"text-muted float-right\">Total Hit Count for the entire WebApp: " + (overallCounter == null || overallCounter == 0 ? "--" : overallCounter) + "</p>\n" +
                    "  </div>" +
                    "  </body>\n" +
                    "</html>");
        }
    }
}
