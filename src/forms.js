import { createTodo, createProject } from './addModule.js'
import { domProject, domTodo } from './domModule.js'
import { projectsArray } from './addModule.js'

export function todoForm() {
    const titleForm = document.getElementById('f-td-title')
    const formDesc = document.getElementById('f-td-description')
    const currentProjectDOM = document.getElementById('current-project')
    let currentProjectObject = ''
    projectsArray.forEach((project) => {
        if (currentProjectDOM.textContent === project.title) {
            currentProjectObject = project
        }
    })
    domTodo(
        createTodo(titleForm.value, formDesc.value, currentProjectObject)
    )
    titleForm.value = ''
    formDesc.value = ''
    const form = document.querySelector('.new-todo-form')
    form.style.zIndex = '-1'
}

export function projectForm() {
    const titleForm = document.getElementById('f-pr-title')
    const color = document.getElementById('f-pr-color')
    domProject(
        createProject(titleForm.value, color)
    )
    color.value = ''
    titleForm.value = ''
    const form = document.querySelector('.new-project-form')
    form.style.zIndex = '-1'
}