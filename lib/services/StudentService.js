class StudentService {
    static getAllStudents(students){
        return students;
    }

    static getEmailOfCertifiedStudents(students){
      const studentsWithCertification = students.filter(student => student.haveCertification === true)
      const emails = studentsWithCertification.map(student => student.email)
      return emails
    }

    static getStudentsOver500(students){
      const studentsOver500 = students.filter(student => student.credits > 500)
      const names = studentsOver500.map(student => student.name)
      return names
    }
}
module.exports = StudentService;
