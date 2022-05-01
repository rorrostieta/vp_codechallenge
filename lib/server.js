const StudentController = require('./controllers/StudentController');
const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (req, res) => {
  res.json({message:'Visual Thinking Student API Welcome!'})
});
app.listen(port, function () {
  console.log(`Students API Starts on ${port}`);
});
