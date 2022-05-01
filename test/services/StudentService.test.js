const StudentService = require('../../lib/services/StudentService');

describe('Student Service Tests', () => {
  test('1. Return all students', () => {
    const students = [{ name: 'student1' }, { name: 'student2' }];
    const test = StudentService.getAllStudents(students);
    expect(test[0].name).toBe('student1');
    expect(test[1].name).toBe('student2');
  });

  test('2. Return emails of all certified students', () => {
    const students = [{ haveCertification: true, email: 'email1' }, { haveCertification: false, email: 'email2' }, { haveCertification: true, email: 'email3' }];
    const test = StudentService.getEmailOfCertifiedStudents(students);
    expect(test.length).toBe(2);
  });

  test('3. Return students with credits over 500', () => {
    const students = [{ name: 'student1', credits: 580 }, { name: 'student2', credits: 490 }, { name: 'student3', credits: 540 }];
    const test = StudentService.getStudentsOver500(students);
    expect(test.length).toBe(2);
  });
});
