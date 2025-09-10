import { deleteUser } from './userService.js';

export function appendUserToList(user, container) {
  const userDiv = document.createElement('div');
  userDiv.classList.add('list-and-btn');
  userDiv.innerHTML = `
    <li>${user.nome}</li>
    <li>${user.sobrenome}</li>
    <li>${user.email}</li>
    <button class="delete-btn">X</button>
  `;

  container.appendChild(userDiv);

  const deleteBtn = userDiv.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', async () => {
    await deleteUser(user.id);
    userDiv.remove();
  });
}