import {Todo, Project} from './factory.js'

export function createTodo(title, description, project) {
    const newTodo = new Todo(title, description)
    project.addTodo(newTodo)
    return newTodo
}

export function createProject(title, color) {
    const newProject = new Project(title, color)
    return newProject
}