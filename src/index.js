import { addForm } from './form';
import { todoList } from './todoList';

document.addEventListener('DOMContentLoaded', () => {
  addForm();
  todoList.render();
});
