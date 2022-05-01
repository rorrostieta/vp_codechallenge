const express = require('express');
const StudentController = require('./controllers/StudentController');

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Visual Thinking Student API Welcome!' });
});

app.get('/v1/students', (req, res) => {
  const students = StudentController.getAllStudents();
  res.json({ students });
});

app.get('/v1/emails', (req, res) => {
  const emails = StudentController.getEmailOfCertifiedStudents();
  res.json({ 'Certified Student Emails': emails });
});

app.get('/v1/credits', (req, res) => {
  const students = StudentController.getStudentsOver500();
  res.json({ 'Students Over 500 Credits': students });
});

app.listen(port, () => {
  console.log(`Students API Starts on ${port}`);
});
