/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("class Todo {\n    constructor(title, description, priority, done){\n        this.title = title\n        this.description = description\n        this.priority = priority\n        this.done = done\n    }\n\n    changeToDone() {\n        this.done = !this.done\n    }\n}\n\nclass Project {\n    constructor(title, color) {\n        this.title = title\n        this.color = color\n        this.todos = []\n    }\n\n    addTodo(todo) {\n        this.todos.push(todo)\n    }\n    removeTodo(todo) {\n        for (let i = 0; i<this.todos.length; i++) {\n            if (this.todos[i].title === todo.title) {\n                this.todos.splice(i, 1)\n            }\n        }\n    }\n}\n\n\nlet limpiar = new Todo('limpiar la casa', 'tirar todo a la mierda, pasar la aspiradora, recoger la pelusa del arbol y limpiar los pisos', 'baja', false)\nlet casa = new Project('casa', 'rojo')\nlet gym = new Todo('ir al gym', 'trabajar brazos y pecho', 'baja', false)\nlet lavar = new Todo('lavar ropa', 'lavar sabanas y calzones', 'alta', false)\nlet compras = new Todo('realizar las compras', 'comprar un pollo y una manteca', 'media', false)\n\ncasa.addTodo(limpiar)\ncasa.addTodo(lavar)\ncasa.addTodo(compras)\nconsole.log(casa);\nconsole.log(casa.todos.includes(limpiar));\ncasa.removeTodo(limpiar)\nconsole.log(casa);\nconsole.log(casa.todos.includes(limpiar));\n\n//# sourceURL=webpack://top-todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;