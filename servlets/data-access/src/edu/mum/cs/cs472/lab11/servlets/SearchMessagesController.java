package edu.mum.cs.cs472.lab11.servlets;

import edu.mum.cs.cs472.lab11.daos.ContactsDAO;
import edu.mum.cs.cs472.lab11.model.ContactFormData;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "SearchMessagesController", urlPatterns = {"/message-search"})
public class SearchMessagesController extends HttpServlet {

    private ContactsDAO contactsDAO;

    public SearchMessagesController() {
        this.contactsDAO = new ContactsDAO();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String keywords = request.getParameter("keywords");
        List<ContactFormData> contactMessages = contactsDAO.searchContactFormData(keywords);
        // set it in requestScope
        request.setAttribute("contactMessages", contactMessages);
        request.setAttribute("messagesExist", contactMessages.size() > 0);
        // forward to View (jsp ui)
        RequestDispatcher rd = request.getRequestDispatcher("/browse-messages.jsp");
        rd.forward(request, response);
    }
}
