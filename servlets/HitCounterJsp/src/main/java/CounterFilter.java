import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

@WebFilter(filterName = "CounterFilter", urlPatterns = {"", "/", "/*"})
public class CounterFilter implements Filter {

    int counter = 0;

    public void destroy() {
    }

    public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain) throws ServletException, IOException {
        req.getServletContext().setAttribute("counter", ++this.counter);
        chain.doFilter(req, resp);
    }

    public void init(FilterConfig config) throws ServletException {

    }
}
