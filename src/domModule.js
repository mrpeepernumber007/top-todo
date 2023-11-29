import { projectsArray } from "./addModule"
import { deleteTodo } from "./index.js"

export function domTodo(todo) {
    const singleTd = document.createElement('div')
    singleTd.classList.add('s-todo')
    singleTd.id = `${todo.title}`
    singleTd.innerHTML = `
    <button class="delete-todo-btn">X</button>
    <input type="checkbox" class="done-btn">
    <div class="todo-text">
        <h3 class="todo-title">${todo.title}</h3>
        <p class="todo-description">${todo.description}</p>
    </div>
    <div class="priority-select">
        <label for="priority">Select a priority</label>
        <select name="prt" id="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
    </div>
    `
    const todosUl = document.querySelector('.todos-ul')
    todosUl.appendChild(singleTd)
}

export function showProject(project) {
    const projectContainerRight = document.querySelector('.s-pr-container')
    projectContainerRight.innerHTML = ''
    projectContainerRight.innerHTML = `
        <div class="project-title-div">
            <h1 id="current-project">${project.title}</h1>
        </div>
        <div class="todos-list">
            <ul class="todos-ul"></ul>
        </div>
    `
    project.todos.forEach(todo => {
        domTodo(todo)
        deleteTodo(identifyPr(), todo)
    });

}

export function domProject(project) {
    const projectsUl = document.querySelector('.projects-ul')
    const singleProj = document.createElement('li')
    singleProj.classList.add('project')
    singleProj.innerHTML = `
    <li class="project">
        <i class="project-icon"></i>
        <p class="project-name">${project.title}</p>
    </li>
    `
    
    projectsUl.appendChild(singleProj)
}

export function identifyPr() {
    const currentProjectDOM = document.getElementById('current-project')
    let currentProjectObject = ''
    projectsArray.forEach((project) => {
        if (currentProjectDOM.textContent === project.title) {
            currentProjectObject = project
        }
    })

    return currentProjectObject
}