import { createTodo } from './todo';
import { todoList } from './todoList';


export function addForm() {
    const form = document.createElement('form');
    form.id = 'todo-form';

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'todo-title';
    titleInput.placeholder = 'Title';
    titleInput.required = true;
  
    const descriptionInput = document.createElement('input');
    descriptionInput.type = 'text';
    descriptionInput.id = 'todo-description';
    descriptionInput.placeholder = 'Description';
    descriptionInput.required = true;
  
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'todo-due-date';
    dueDateInput.required = true;

    const priorityInput = document.createElement('select');
    priorityInput.id = 'todo-priority';
    const priorities = ['High', 'Medium', 'Low'];
    priorities.forEach(priority => {
        const option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        priorityInput.appendChild(option);
    });

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Add';

    form.append(titleInput, descriptionInput, dueDateInput, priorityInput, submitButton);
    document.body.appendChild(form);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const newTodo = createTodo({
            title: titleInput.value,
            description: descriptionInput.value,
            dueDate: dueDateInput.value,
            priority: priorityInput.value,
        });
        todoList.addTodo(newTodo);
        titleInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        priorityInput.value = 'High';
    });
}