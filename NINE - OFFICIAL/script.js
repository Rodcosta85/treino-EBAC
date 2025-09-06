document.addEventListener('DOMContentLoaded', function () {

    const userUl = document.getElementById('user-list');


    const appendUserToList = (user) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('list-and-btn');
        userDiv.innerHTML = `
                    <li>${user.nome}</li>
                    <li>${user.sobrenome}</li>
                    <li>${user.email}</li>
                    <button class="delete-btn">X</button>`
        userUl.appendChild(userDiv);

        // Add delete functionality
        const deleteBtn = userDiv.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            fetch(`http://localhost:3000/users/${user.id}`, {
                method: 'DELETE'
            }).then(() => userDiv.remove());
        });
    }

    const getUsers = () => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(userList => {
                userList.forEach(user => {
                    appendUserToList(user);
                });
            });
    }


    const registerNewUser = () => {
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;
        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ nome: name, sobrenome: lastName, email: email })

        })
            .then(res => res.json())
            .then(newUser => {
                // Only add the single new user
                appendUserToList(newUser); 
                // Clear input fields after successful submission
                document.getElementById('name').value = '';
                document.getElementById('last-name').value = '';
                document.getElementById('email').value = '';
            });
    }

    document.getElementById('add-btn').addEventListener('click', registerNewUser);
    getUsers();

})