/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addForm: () => (/* binding */ addForm)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n\n\n\n\nfunction addForm() {\n    const form = document.createElement('form');\n    form.id = 'todo-form';\n\n    const titleInput = document.createElement('input');\n    titleInput.type = 'text';\n    titleInput.id = 'todo-title';\n    titleInput.placeholder = 'Title';\n    titleInput.required = true;\n  \n    const descriptionInput = document.createElement('input');\n    descriptionInput.type = 'text';\n    descriptionInput.id = 'todo-description';\n    descriptionInput.placeholder = 'Description';\n    descriptionInput.required = true;\n  \n    const dueDateInput = document.createElement('input');\n    dueDateInput.type = 'date';\n    dueDateInput.id = 'todo-due-date';\n    dueDateInput.required = true;\n\n    const priorityInput = document.createElement('select');\n    priorityInput.id = 'todo-priority';\n    const priorities = ['High', 'Medium', 'Low'];\n    priorities.forEach(priority => {\n        const option = document.createElement('option');\n        option.value = priority;\n        option.textContent = priority;\n        priorityInput.appendChild(option);\n    });\n\n    const submitButton = document.createElement('button');\n    submitButton.type = 'submit';\n    submitButton.textContent = 'Add';\n\n    form.append(titleInput, descriptionInput, dueDateInput, priorityInput, submitButton);\n    document.body.appendChild(form);\n\n    form.addEventListener('submit', function(event) {\n        event.preventDefault();\n        const newTodo = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)({\n            title: titleInput.value,\n            description: descriptionInput.value,\n            dueDate: dueDateInput.value,\n            priority: priorityInput.value,\n        });\n        _todoList__WEBPACK_IMPORTED_MODULE_1__.todoList.addTodo(newTodo);\n        titleInput.value = '';\n        descriptionInput.value = '';\n        dueDateInput.value = '';\n        priorityInput.value = 'High';\n    });\n}\n\n//# sourceURL=webpack://todo-list/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _todoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoList */ \"./src/todoList.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  (0,_form__WEBPACK_IMPORTED_MODULE_0__.addForm)();\n  _todoList__WEBPACK_IMPORTED_MODULE_1__.todoList.render();\n});\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction createTodo({ title, description, dueDate, priority}) {\n    return {\n        title,\n        description,\n        dueDate,\n        priority,\n        render() {\n            const todoElement = document.createElement('div');\n            todoElement.classList.add('todo-item');\n\n            const titleElement = document.createElement('h2');\n            titleElement.textContent = this.title;\n            \n            const descriptionElement = document.createElement('p');\n            descriptionElement.textContent = this.description;\n\n            const dueDateElement = document.createElement('p');\n            dueDateElement.textContent = `Due: ${this.dueDate}`;\n\n            const priorityElememt = document.createElement('p');\n            priorityElememt.textContent = `Priority: ${this.priority}`;\n\n            todoElement.append(titleElement, descriptionElement, dueDateElement, priorityElememt);\n            return todoElement;\n        },\n    };\n}\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ }),

/***/ "./src/todoList.js":
/*!*************************!*\
  !*** ./src/todoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\nfunction createTodoList() {\n    const todos = [];\n  \n    return {\n      addTodo: function(todo) {\n        todos.push(todo);\n        this.render();\n      },\n      render: function() {\n        const listElement = document.createElement('div');\n        listElement.classList.add('todo-list');\n  \n        todos.forEach(todo => {\n          listElement.appendChild(todo.render());\n        });\n  \n        // Clear previous list and re-append updated list\n        const existingList = document.querySelector('.todo-list');\n        if (existingList) {\n          document.body.removeChild(existingList);\n        }\n        document.body.appendChild(listElement);\n      },\n    };\n  }\n  \n  const todoList = createTodoList();\n  \n  \n\n//# sourceURL=webpack://todo-list/./src/todoList.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;