export function createTodo({ title, description, dueDate, priority}) {
    return {
        title,
        description,
        dueDate,
        priority,
        render() {
            const todoElement = document.createElement('div');
            todoElement.classList.add('todo-item');

            const titleElement = document.createElement('h2');
            titleElement.textContent = this.title;
            
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = this.description;

            const dueDateElement = document.createElement('p');
            dueDateElement.textContent = `Due: ${this.dueDate}`;

            const priorityElememt = document.createElement('p');
            priorityElememt.textContent = `Priority: ${this.priority}`;

            todoElement.append(titleElement, descriptionElement, dueDateElement, priorityElememt);
            return todoElement;
        },
    };
}