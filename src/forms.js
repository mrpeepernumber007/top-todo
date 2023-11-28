import { createTodo, createProject } from './addModule.js'
import { domProject, domTodo } from './domModule.js'
import {casa} from './index.js'

export function todoForm() {
    const titleForm = document.getElementById('f-td-title')
    const formDesc = document.getElementById('f-td-description')
    domTodo(
        createTodo(titleForm.value, formDesc.value, casa)
    )
    titleForm.value = ''
    formDesc.value = ''
}

export function projectForm() {
    const titleForm = document.getElementById('f-pr-title')
    const color = document.getElementById('f-pr-color')
    domProject(
        createProject(titleForm.value, color)
    )
    color.value = ''
    titleForm.value = ''
}