import express from 'express';
import Student from './models/student.js';

const app = express();

app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

app.get('/students/:studentId', async (req, res) => {
  //   console.log(req.params);
  //   res.send(`student ${JSON.stringify(req.params)}`);
  const { studentId } = req.params;

  const student = await Student.findById(studentId);
  if (student === null) {
    return res.status(404).send('Student not found');
  }
  console.log(student);

  res.json(student);
});

export default app;
