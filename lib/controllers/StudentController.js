const Reader = require('./../utils/Reader');
const StudentService = require('./../services/StudentService');

class StudentController {
  static getAllStudents(){
    const students = Reader.readJsonFile('./visualpartners.json')
    return StudentService.getAllStudents(students)
  }
}

module.exports = StudentController
