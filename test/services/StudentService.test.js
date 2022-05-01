const StudentService = require('./../../lib/services/StudentService');

describe('Student Service Tests', () => {
  test("1. Return all students", () => {
    const students = [{name:'student1'},{name:'student2'}]
    const test = StudentService.getAllStudents(students)
    expect(test[0].name).toBe('student1')
    expect(test[1].name).toBe('student2')
  });
});
