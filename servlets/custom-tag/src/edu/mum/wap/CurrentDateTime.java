package edu.mum.wap;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;
import javax.servlet.jsp.tagext.SimpleTagSupport;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class CurrentDateTime extends SimpleTagSupport {

    String color;
    String size;

    public void doTag() throws JspException, IOException {
        JspWriter out = getJspContext().getOut();

        LocalDate now = LocalDate.now();

        out.write(String.format("<span style='color: %s; font-size: %s;'>%s</span>", color, size,
                now.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy"))));
    }

    // Setters
    public void setColor(String color) {
        this.color = color;
    }

    public void setSize(String size) {
        this.size = size;
    }
}
