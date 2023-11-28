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

/***/ "./src/addModule.js":
/*!**************************!*\
  !*** ./src/addModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\n/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ \"./src/factory.js\");\n\n\nfunction createTodo(title, description, project) {\n    const newTodo = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description)\n    project.addTodo(newTodo)\n    return newTodo\n}\n\nfunction createProject(title, color) {\n    const newProject = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Project(title, color)\n    return newProject\n}\n\n//# sourceURL=webpack://top-todo/./src/addModule.js?");

/***/ }),

/***/ "./src/domModule.js":
/*!**************************!*\
  !*** ./src/domModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domProject: () => (/* binding */ domProject),\n/* harmony export */   domTodo: () => (/* binding */ domTodo)\n/* harmony export */ });\nfunction domTodo(todo) {\n    const singleTd = document.createElement('div')\n    singleTd.classList.add('s-todo')\n    singleTd.innerHTML = `\n    <button class=\"delete-todo-btn\">X</button>\n    <input type=\"checkbox\" class=\"done-btn\">\n    <div class=\"todo-text\">\n        <h3 class=\"todo-title\">${todo.title}</h3>\n        <p class=\"todo-description\">${todo.description}</p>\n    </div>\n    <div class=\"priority-select\">\n        <label for=\"priority\">Select a priority</label>\n        <select name=\"prt\" id=\"priority\">\n            <option value=\"high\">High</option>\n            <option value=\"medium\">Medium</option>\n            <option value=\"low\">Low</option>\n        </select>\n    </div>\n    `\n    const todosUl = document.querySelector('.todos-ul')\n    todosUl.appendChild(singleTd)\n}\n\nfunction domProject(project) {\n    const singleProj = document.createElement('li')\n    singleProj.classList.add('project')\n    singleProj.innerHTML = `\n    <li class=\"project\">\n        <i class=\"project-icon\"></i>\n        <p class=\"project-name\">${project.title}</p>\n    </li>\n    `\n\n    const projectsUl = document.querySelector('.projects-ul')\n    projectsUl.appendChild(singleProj)\n}\n\n//# sourceURL=webpack://top-todo/./src/domModule.js?");

/***/ }),

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Todo: () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    constructor(title, description, priority, done){\n        this.title = title\n        this.description = description\n        this.priority = priority\n        this.done = done\n    }\n\n    changeDone() {\n        this.done = !this.done\n    }\n    changePriority(newPriority){\n        this.priority = newPriority\n    }\n}\n\nclass Project {\n    constructor(title, color) {\n        this.title = title\n        this.color = color\n        this.todos = []\n    }\n\n    addTodo(todo) {\n        this.todos.push(todo)\n    }\n    removeTodo(todo) {\n        for (let i = 0; i<this.todos.length; i++) {\n            if (this.todos[i].title === todo.title) {\n                this.todos.splice(i, 1)\n            }\n        }\n    }\n}\n\n//# sourceURL=webpack://top-todo/./src/factory.js?");

/***/ }),

/***/ "./src/forms.js":
/*!**********************!*\
  !*** ./src/forms.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectForm: () => (/* binding */ projectForm),\n/* harmony export */   todoForm: () => (/* binding */ todoForm)\n/* harmony export */ });\n/* harmony import */ var _addModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addModule.js */ \"./src/addModule.js\");\n/* harmony import */ var _domModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domModule.js */ \"./src/domModule.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\nfunction todoForm() {\n    const titleForm = document.getElementById('f-td-title')\n    const formDesc = document.getElementById('f-td-description')\n    ;(0,_domModule_js__WEBPACK_IMPORTED_MODULE_1__.domTodo)(\n        (0,_addModule_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(titleForm.value, formDesc.value, _index_js__WEBPACK_IMPORTED_MODULE_2__.casa)\n    )\n    titleForm.value = ''\n    formDesc.value = ''\n}\n\nfunction projectForm() {\n    const titleForm = document.getElementById('f-pr-title')\n    const color = document.getElementById('f-pr-color')\n    ;(0,_domModule_js__WEBPACK_IMPORTED_MODULE_1__.domProject)(\n        (0,_addModule_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(titleForm.value, color)\n    )\n    color.value = ''\n    titleForm.value = ''\n}\n\n//# sourceURL=webpack://top-todo/./src/forms.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   casa: () => (/* binding */ casa)\n/* harmony export */ });\n/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ \"./src/factory.js\");\n/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ \"./src/forms.js\");\n\n// import { createTodo, createProject } from './addModule.js'\n// import { domProject, domTodo } from './domModule.js'\n\n\nlet casa = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Project('casa', 'rojo')\nlet limpiar = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Todo('limpiar la casa', 'tirar todo a la mierda, pasar la aspiradora, recoger la pelusa del arbol y limpiar los pisos', 'baja', false)\nlet gym = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Todo('ir al gym', 'trabajar brazos y pecho', 'baja', false)\nlet lavar = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Todo('lavar ropa', 'lavar sabanas y calzones', 'alta', false)\nlet compras = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Todo('realizar las compras', 'comprar un pollo y una manteca', 'media', false)\n\nconst newTodo = document.getElementById('new-todo')\nconst newProject = document.getElementById('new-project')\nconst tdSubmit = document.getElementById('submit-td')\nconst prSubmit = document.getElementById('submit-pr')\n\ntdSubmit.addEventListener('click', _forms_js__WEBPACK_IMPORTED_MODULE_1__.todoForm)\n\nprSubmit.addEventListener('click', _forms_js__WEBPACK_IMPORTED_MODULE_1__.projectForm)\n\nnewTodo.addEventListener('click', () => {\n    const givenTitle = 'limpiar tacho'\n    const givenDescription = 'limpiar tachos de basura de cocina y baño'\n\n    const createdTodo = createTodo(givenTitle, givenDescription, casa)\n    console.log(createdTodo);\n    domTodo(createdTodo)\n})\n\nnewProject.addEventListener('click', ()=> {\n    const givenTitle = 'salud'\n    const createdProject = createProject(givenTitle, 'rojo')\n    domProject(createdProject)\n})\n\n\n\n//when data is returned in JSON format, methods should be returned to the objects by way of a function that assings the method to the object's prototype\n\n\n\n//# sourceURL=webpack://top-todo/./src/index.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;