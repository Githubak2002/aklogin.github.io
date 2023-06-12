
        const todoForm = document.getElementById('todo-form');
        const todoInput = document.getElementById('todo-input');
        const todoList = document.getElementById('todo-list');

        todoForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const todoText = todoInput.value;
            if (todoText) {
                const todoItem = document.createElement('li');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                const label = document.createElement('label');
                label.textContent = todoText;
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';

                deleteButton.addEventListener('click', function () {
                    todoItem.remove();
                });

                todoItem.appendChild(checkbox);
                todoItem.appendChild(label);
                todoItem.appendChild(deleteButton);
                todoList.appendChild(todoItem);

                todoInput.value = '';
            }
        });