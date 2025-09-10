import { $, } from './utils.js';
import { getUsers, addUser } from './userService.js';
import { appendUserToList } from './userUI.js';

document.addEventListener('DOMContentLoaded', async () => {
  const userUl = $('#user-list');
  const addBtn = $('#add-btn');

  // Load all users
  const users = await getUsers();
  users.forEach(user => appendUserToList(user, userUl));

  // Register new user
  addBtn.addEventListener('click', async () => {
    const name = $('#name').value;
    const lastName = $('#last-name').value;
    const email = $('#email').value;

    if (!name || !lastName || !email) return;

    const newUser = await addUser({ nome: name, sobrenome: lastName, email });
    appendUserToList(newUser, userUl);

    $('#name').value = '';
    $('#last-name').value = '';
    $('#email').value = '';
  });
});