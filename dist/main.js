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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createTodo: () => (/* binding */ createTodo),\n/* harmony export */   projectsArray: () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray)\n/* harmony export */ });\n/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ \"./src/factory.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nfunction createTodo(title, description, project) {\n    const newTodo = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description)\n    project.addTodo(newTodo)\n    return newTodo\n}\n\nfunction createProject(title, color) {\n    const newProject = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Project(title, color)\n    _index_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.push(newProject)\n    return newProject\n}\n\n\n\n//# sourceURL=webpack://top-todo/./src/addModule.js?");

/***/ }),

/***/ "./src/domModule.js":
/*!**************************!*\
  !*** ./src/domModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domProject: () => (/* binding */ domProject),\n/* harmony export */   domTodo: () => (/* binding */ domTodo),\n/* harmony export */   identifyPr: () => (/* binding */ identifyPr),\n/* harmony export */   identifyTd: () => (/* binding */ identifyTd),\n/* harmony export */   showProject: () => (/* binding */ showProject)\n/* harmony export */ });\n/* harmony import */ var _addModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addModule */ \"./src/addModule.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\nfunction domTodo(todo) {\n    const singleTd = document.createElement('div')\n    singleTd.classList.add('s-todo')\n    // singleTd.classList.add(`${todo.title}`)\n    singleTd.id = `${todo.title}`\n    singleTd.innerHTML = `\n    <button class=\"delete-todo-btn\">X</button>\n    <input type=\"checkbox\" class=\"done-btn\">\n    <div class=\"todo-text\">\n        <h3 class=\"todo-title\">${todo.title}</h3>\n        <p class=\"todo-description\">${todo.description}</p>\n    </div>\n    <div class=\"priority-select\">\n        <label for=\"priority\">Select a priority</label>\n        <select name=\"prt\" id=\"priority\">\n            <option value=\"high\">High</option>\n            <option value=\"medium\">Medium</option>\n            <option value=\"low\">Low</option>\n        </select>\n    </div>\n    `\n    const todosUl = document.querySelector('.todos-ul')\n    todosUl.appendChild(singleTd)\n}\n\nfunction showProject(project) {\n    const projectContainerRight = document.querySelector('.s-pr-container')\n    projectContainerRight.innerHTML = ''\n    projectContainerRight.innerHTML = `\n        <div class=\"project-title-div\">\n            <h1 id=\"current-project\">${project.title}</h1>\n        </div>\n        <div class=\"todos-list\">\n            <ul class=\"todos-ul\"></ul>\n        </div>\n    `\n    project.todos.forEach(todo => {\n        domTodo(todo)\n        ;(0,_index_js__WEBPACK_IMPORTED_MODULE_1__.deleteTodo)(identifyPr(), todo)\n    });\n\n}\n\nfunction domProject(project) {\n    const projectsUl = document.querySelector('.projects-ul')\n    const singleProj = document.createElement('li')\n    singleProj.classList.add('project')\n    singleProj.innerHTML = `\n    <li class=\"project\">\n        <i class=\"project-icon\"></i>\n        <p class=\"project-name\">${project.title}</p>\n    </li>\n    `\n    \n    projectsUl.appendChild(singleProj)\n}\n\nfunction identifyPr() {\n    const currentProjectDOM = document.getElementById('current-project')\n    let currentProjectObject = ''\n    _addModule__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach((project) => {\n        if (currentProjectDOM.textContent === project.title) {\n            currentProjectObject = project\n        }\n    })\n\n    return currentProjectObject\n}\n\nfunction identifyTd(chosenPr, chosenTd) {\n    // const selected = document.getElementById(`${chosenTd}`)\n    // console.log(selected);\n    chosenPr.todos.forEach((todo) => {\n        if (chosenTd.id === (todo.title)) {\n            return todo\n        }\n    })\n}\n\n//# sourceURL=webpack://top-todo/./src/domModule.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   projectForm: () => (/* binding */ projectForm),\n/* harmony export */   todoForm: () => (/* binding */ todoForm)\n/* harmony export */ });\n/* harmony import */ var _addModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addModule.js */ \"./src/addModule.js\");\n/* harmony import */ var _domModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domModule.js */ \"./src/domModule.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n\n\nfunction todoForm() {\n    const titleForm = document.getElementById('f-td-title')\n    const formDesc = document.getElementById('f-td-description')\n    \n    const currentProject = (0,_domModule_js__WEBPACK_IMPORTED_MODULE_1__.identifyPr)()\n    const addedTodo = (0,_addModule_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(titleForm.value, formDesc.value, currentProject)\n    ;(0,_domModule_js__WEBPACK_IMPORTED_MODULE_1__.domTodo)(addedTodo)\n    \n    //reset form\n    titleForm.value = ''\n    formDesc.value = ''\n    const form = document.querySelector('.new-todo-form')\n    form.style.zIndex = '-1'\n\n    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.deleteTodo)(currentProject, addedTodo)\n}\n\nfunction projectForm() {\n    const titleForm = document.getElementById('f-pr-title')\n    const color = document.getElementById('f-pr-color')\n    const newProject = (0,_addModule_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(titleForm.value, color)\n\n    color.value = ''\n    titleForm.value = ''\n    const form = document.querySelector('.new-project-form')\n    form.style.zIndex = '-1'\n\n    const projectsUl = document.querySelector('.projects-ul')\n    projectsUl.innerHTML = ''\n    _addModule_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.forEach((project) => (0,_domModule_js__WEBPACK_IMPORTED_MODULE_1__.domProject)(project))\n\n    ;(0,_index_js__WEBPACK_IMPORTED_MODULE_2__.selectProject)()\n}\n\n\n\n\n//# sourceURL=webpack://top-todo/./src/forms.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   casa: () => (/* binding */ casa),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   projectsArray: () => (/* binding */ projectsArray),\n/* harmony export */   selectProject: () => (/* binding */ selectProject)\n/* harmony export */ });\n/* harmony import */ var _factory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory.js */ \"./src/factory.js\");\n/* harmony import */ var _forms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms.js */ \"./src/forms.js\");\n/* harmony import */ var _domModule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domModule.js */ \"./src/domModule.js\");\n\n\n\n\n\n//test light-mode\nconst projectsArray = []\nconst lDMode = document.querySelector('.light-dark')\n\nlDMode.addEventListener('click', () => {\n    let root = document.documentElement\n\n    root.style.setProperty('--white', '#000')\n    root.style.setProperty('--black', '#fff')\n})\n\n\n//test variables\nlet casa = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Project('casa', 'rojo')\nlet compras = new _factory_js__WEBPACK_IMPORTED_MODULE_0__.Project('compras', 'verde')\nprojectsArray.push(casa)\nprojectsArray.push(compras)\n\n\n//Show selected project\n\nfunction selectProject() {\n    const allProjects = document.querySelectorAll('.project-name')\n    \n    allProjects.forEach((project) => {\n        project.addEventListener('click', () => {\n            const projTitle = project.textContent\n            projectsArray.forEach((proj) => {\n                if (proj.title === projTitle) {\n                    (0,_domModule_js__WEBPACK_IMPORTED_MODULE_2__.showProject)(proj)\n                }\n            })\n        })\n    })\n}\nselectProject()\n\n//Toggle forms for new project and new todo\nconst toggleTdForm = document.getElementById('new-todo')\nconst togglePrForm = document.getElementById('new-project')\ntoggleTdForm.addEventListener('click', () => {\n    const todoForm = document.querySelector('.new-todo-form')\n    todoForm.style.zIndex = '2'\n})\n\ntogglePrForm.addEventListener('click', ()=> {\n    const projectForm = document.querySelector('.new-project-form')\n    projectForm.style.zIndex = '2'\n})\n\n//Functionality of forms used to create new projects and todos\nconst tdSubmit = document.getElementById('submit-td')\nconst prSubmit = document.getElementById('submit-pr')\ntdSubmit.addEventListener('click', _forms_js__WEBPACK_IMPORTED_MODULE_1__.todoForm)\nprSubmit.addEventListener('click', _forms_js__WEBPACK_IMPORTED_MODULE_1__.projectForm)\n\n//delete todo function\nfunction deleteTodo(projectObj, todoDel) {\n    const delBtns = document.querySelectorAll('.delete-todo-btn')\n    delBtns.forEach((btn) => {\n        btn.addEventListener('click', (e) => {\n            e.target.parentElement.remove()\n            projectObj.removeTodo(todoDel)\n        })\n    })\n}\n\n\n//when data is returned in JSON format, methods should be returned to the objects by way of a function that assings the method to the object's prototype\n\n\n// let limpiar = new Todo('limpiar la casa', 'tirar todo a la mierda, pasar la aspiradora, recoger la pelusa del arbol y limpiar los pisos', 'baja', false)\n// let gym = new Todo('ir al gym', 'trabajar brazos y pecho', 'baja', false)\n// let lavar = new Todo('lavar ropa', 'lavar sabanas y calzones', 'alta', false)\n// let compras = new Todo('realizar las compras', 'comprar un pollo y una manteca', 'media', false)\n\n\n// export function deleteTodo(projectObj, todoDel) {\n//     const delBtns = document.querySelectorAll('.delete-todo-btn')\n//     delBtns.forEach((btn) => {\n//         if(todoDel) {\n//                 btn.addEventListener('click', (e) => {\n//                     e.target.parentElement.remove()\n//                     projectObj.removeTodo(todoDel)\n//                 })\n//         } else if (!todoDel) {\n//             const parent = btn.parentElement\n//             const identified = identifyTd(projectObj, parent)\n//             deleteTodo(projectObj, identified)\n//             // btn.addEventListener('click', (e) => {\n//             //     const identified = identifyTd(projectObj, e.target.parentElement)\n//             //     deleteTodo(projectObj, identified)\n//             // })\n//         }\n//     })\n// }\n\n//# sourceURL=webpack://top-todo/./src/index.js?");

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