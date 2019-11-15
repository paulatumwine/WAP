import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ContactServlet", urlPatterns = {"/contact-us"})
public class ContactServlet extends HttpServlet {
    int counter;

    @Override
    public void init() throws ServletException {
        super.init();
        this.counter = 0;
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setAttribute("counter", ++this.counter);
        request.getRequestDispatcher("/contact-us.jsp").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
