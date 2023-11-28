import {Todo, Project} from './factory.js'
import { projectsArray } from './index.js'

export function createTodo(title, description, project) {
    const newTodo = new Todo(title, description)
    project.addTodo(newTodo)
    return newTodo
}

export function createProject(title, color) {
    const newProject = new Project(title, color)
    projectsArray.push(newProject)
    return newProject
}

export {projectsArray}