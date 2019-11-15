import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "DisplayServlet", urlPatterns = {"/display"})
public class DisplayServlet extends HttpServlet {
    int counter;

    @Override
    public void init() throws ServletException {
        super.init();
        this.counter = 0;
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        this.counter++;
        request.setAttribute("counter", this.counter++);
        request.getRequestDispatcher("/display.jsp").forward(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }
}
