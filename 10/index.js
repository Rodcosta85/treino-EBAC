const express = require('express');
const cors = require('cors'); // <-- add this
const app = express();

const PORT = 3000;

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Temporary in-memory storage (like CrudCrud)
let users = [];
let nextId = 1;

// Routes go here

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// CREATE
app.post('/users', (req, res) => {
  const user = { id: nextId++, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

// READ ALL
app.get('/users', (req, res) => {
  res.json(users);
});

// READ ONE
app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(i => i.id === id);
  if (!user) return res.status(404).json({ message: 'user not found' });
  res.json(user);
});

// UPDATE
app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ message: 'user not found' });
  users[index] = { id, ...req.body };
  res.json(users[index]);
});

// DELETE
app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ message: 'user not found' });
  const deleted = users.splice(index, 1);
  res.json(deleted[0]);
});