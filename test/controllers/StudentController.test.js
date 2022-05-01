const StudentController = require('../../lib/controllers/StudentController');

describe('Student Controller Tests', () => {
  test('1. Get all Students', () => {
    const test = StudentController.getAllStudents();
    expect(test[0].name).toBe('Warren');
  });

  test('2. Get email of certified students', () => {
    const test = StudentController.getEmailOfCertifiedStudents();
    expect(test[0]).toBe('Todd@visualpartnership.xyz');
  });

  test('3. Get name of students with more than 500 credits', () => {
    const test = StudentController.getStudentsOver500();
    expect(test[0]).toBe('Warren');
  });
});
