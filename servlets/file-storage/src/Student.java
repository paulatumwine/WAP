public class Student {

    String studentId;
    String firstName;

    public Student() {}

    public Student(String studentId, String firstName) {
        this.studentId = studentId;
        this.firstName = firstName;
    }

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Override
    public String toString() {
        return "Student [studentId=" + studentId + ", firstName=" + firstName + "]";
    }
}
