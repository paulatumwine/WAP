import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;

@WebServlet(name = "ValidationServlet", urlPatterns = {"/validate/"})
public class ValidationServlet extends HttpServlet {

    int counter;

    @Override
    public void init() throws ServletException {
        super.init();
        this.counter = 0;
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.counter++;
        try (PrintWriter out = response.getWriter()) {
            String name = request.getParameter("names");
            String gender = request.getParameter("gender");
            String category = request.getParameter("category");
            String message = request.getParameter("message");

            List<String> errors = new ArrayList<>();
            if (name != null && name.equals("")) {
                errors.add("Please add a name");
            }
            if (gender == null || gender != null && gender.equals("")) {
                errors.add("Please select gender");
            }
            if (category != null && category.equals("")) {
                errors.add("Please select a category");
            }
            if (message != null && message.equals("")) {
                errors.add("Please add a message");
            }
            if (errors.size() > 0) {
                request.setAttribute("errors", errors);
                request.getRequestDispatcher("/contact-us.jsp").forward(request, response);
            } else {
                response.sendRedirect(request.getContextPath() + "/display.jsp?names=" + name + "&gender=" + gender + "&category=" + category + "&message=" + message);
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
