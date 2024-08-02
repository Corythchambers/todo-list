function createTodoList() {
    const todos = [];
  
    return {
      addTodo: function(todo) {
        todos.push(todo);
        this.render();
      },
      render: function() {
        const listElement = document.createElement('div');
        listElement.classList.add('todo-list');
  
        todos.forEach(todo => {
          listElement.appendChild(todo.render());
        });
  
        // Clear previous list and re-append updated list
        const existingList = document.querySelector('.todo-list');
        if (existingList) {
          document.body.removeChild(existingList);
        }
        document.body.appendChild(listElement);
      },
    };
  }
  
  const todoList = createTodoList();
  export { todoList };
  