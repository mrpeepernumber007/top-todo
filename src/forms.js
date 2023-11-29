import { createTodo, createProject } from './addModule.js'
import { domProject, domTodo, showProject, identifyPr } from './domModule.js'
import { projectsArray } from './addModule.js'
import { selectProject, deleteTodo} from './index.js'

export function todoForm() {
    const titleForm = document.getElementById('f-td-title')
    const formDesc = document.getElementById('f-td-description')
    
    const currentProject = identifyPr()
    const addedTodo = createTodo(titleForm.value, formDesc.value, currentProject)
    domTodo(addedTodo)
    
    //reset form
    titleForm.value = ''
    formDesc.value = ''
    const form = document.querySelector('.new-todo-form')
    form.style.zIndex = '-1'

    deleteTodo(currentProject, addedTodo)
}

export function projectForm() {
    const titleForm = document.getElementById('f-pr-title')
    const color = document.getElementById('f-pr-color')
    const newProject = createProject(titleForm.value, color)

    color.value = ''
    titleForm.value = ''
    const form = document.querySelector('.new-project-form')
    form.style.zIndex = '-1'

    const projectsUl = document.querySelector('.projects-ul')
    projectsUl.innerHTML = ''
    projectsArray.forEach((project) => domProject(project))

    selectProject()
}


