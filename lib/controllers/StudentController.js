const Reader = require('../utils/Reader');
const StudentService = require('../services/StudentService');

class StudentController {
  static getAllStudents() {
    const students = Reader.readJsonFile('./visualpartners.json');
    return StudentService.getAllStudents(students);
  }

  static getEmailOfCertifiedStudents() {
    const students = Reader.readJsonFile('./visualpartners.json');
    return StudentService.getEmailOfCertifiedStudents(students);
  }

  static getStudentsOver500() {
    const students = Reader.readJsonFile('./visualpartners.json');
    return StudentService.getStudentsOver500(students);
  }
}

module.exports = StudentController;
