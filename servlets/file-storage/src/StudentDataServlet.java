import com.fasterxml.jackson.databind.ObjectMapper;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@WebServlet(name = "StudentDataServlet", urlPatterns = {"/student-data/"})
public class StudentDataServlet extends HttpServlet {

    ObjectMapper mapper = new ObjectMapper();
    String studentDataFile = "/WEB-INF/classes/students.json";

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try (PrintWriter out = response.getWriter()) {
            String studentId = request.getParameter("studentId");
            String firstName = request.getParameter("firstName");

            List<String> errors = new ArrayList<>();
            if (studentId != null && studentId.equals("")) {
                errors.add("Please add a name");
            }
            if (firstName != null && firstName.equals("")) {
                errors.add("Please select gender");
            }
            if (errors.size() > 0) {
                // error response
                request.setAttribute("errors", errors);
                request.getRequestDispatcher("/index.jsp").forward(request, response);
            } else {
                // success response
                String raw = readData();
                Student[] current = mapper.readValue(raw, Student[].class);

                List<Student> updated = new ArrayList<>();
                // for (Student s: current) updated.add(s);
                Arrays.stream(current).forEach(s -> updated.add(s));
                updated.add(new Student(studentId, firstName));

                String path = getServletContext().getRealPath(studentDataFile);
                mapper.writeValue(new File(path), updated);

                String updatedData = mapper.writeValueAsString(updated);
                out.append(updatedData);
            }
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        try (PrintWriter out = response.getWriter()) {
            String studentData = readData();
            out.append(studentData);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private String readData() throws IOException {
        InputStream dataFile = getServletContext().getResourceAsStream(studentDataFile);
        try (BufferedReader buffer = new BufferedReader(new InputStreamReader(dataFile))) {
            String studentData = buffer.lines().collect(Collectors.joining("\n"));
            return studentData;
        }
    }
}
