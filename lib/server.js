const StudentController = require('./controllers/StudentController');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.json({message:'Visual Thinking Student API Welcome!'})
});
app.get('/v1/students', (req, res) => {
  const students = StudentController.getAllStudents()
  res.json({students: students})
});
app.listen(port, function () {
  console.log(`Students API Starts on ${port}`);
});
