const BASE_URL = 'http://localhost:3000/users';

export async function getUsers() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function addUser(user) {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(user)
  });
  return res.json();
}

export async function deleteUser(id) {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
}