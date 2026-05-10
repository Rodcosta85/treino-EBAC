document.addEventListener('DOMContentLoaded', function () {
    const myUl = document.getElementById('tasks-list');

    // Fetch and display tasks
    fetch('https://crudcrud.com/api/6a706321a9364065b13b6a04262d2bc3/my-items')
        .then(res => res.json())
        .then(tasksList => {
            tasksList.forEach(element => {
                const taskDiv = document.createElement('div');
                taskDiv.classList.add('list-and-btn');
                taskDiv.innerHTML = `<li>${element.listItem}</li><button class="delete-btn">X</button>`;
                myUl.appendChild(taskDiv);

                // Add delete functionality
                const deleteBtn = taskDiv.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', () => {
                    fetch(`https://crudcrud.com/api/6a706321a9364065b13b6a04262d2bc3/my-items/${element._id}`, {
                        method: 'DELETE'
                    }).then(() => taskDiv.remove());
                });
            });
        });

    // Add new task
    document.getElementById('add-btn').addEventListener('click', () => {
        const inputVal = document.getElementById('list-input').value;
        fetch('https://crudcrud.com/api/6a706321a9364065b13b6a04262d2bc3/my-items', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ listItem: inputVal })
        })
            .then(res => res.json())
            .then(element => {
                const taskDiv = document.createElement('div');
                taskDiv.innerHTML = `<li>${element.listItem}</li><button class="delete-btn">X</button>`;
                myUl.appendChild(taskDiv);

                const deleteBtn = taskDiv.querySelector('.delete-btn');
                deleteBtn.addEventListener('click', () => {
                    fetch(`https://crudcrud.com/api/6a706321a9364065b13b6a04262d2bc3/my-items/${element._id}`, {
                        method: 'DELETE'
                    }).then(() => taskDiv.remove());
                });
            });
    });


})

