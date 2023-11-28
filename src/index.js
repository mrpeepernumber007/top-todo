import { Todo, Project } from './factory.js'
import { todoForm, projectForm } from './forms.js'
import { showProject } from './domModule.js'

const projectsArray = []

let casa = new Project('casa', 'rojo')
let compras = new Project('compras', 'verde')
projectsArray.push(casa)
projectsArray.push(compras)

const toggleTdForm = document.getElementById('new-todo')
const togglePrForm = document.getElementById('new-project')
const tdSubmit = document.getElementById('submit-td')
const prSubmit = document.getElementById('submit-pr')
const allProjects = document.querySelectorAll('.project-name')

allProjects.forEach((project) => {
    project.addEventListener('click', (e) => {
        const projTitle = project.textContent
        projectsArray.forEach((proj) => {
            if (proj.title === projTitle) {
                showProject(proj)
            }
        })
    })
})
tdSubmit.addEventListener('click', todoForm)
prSubmit.addEventListener('click', projectForm)

toggleTdForm.addEventListener('click', () => {
    const todoForm = document.querySelector('.new-todo-form')
    todoForm.style.zIndex = '2'
})

togglePrForm.addEventListener('click', ()=> {
    const projectForm = document.querySelector('.new-project-form')
    projectForm.style.zIndex = '2'
})



//when data is returned in JSON format, methods should be returned to the objects by way of a function that assings the method to the object's prototype

export {casa, projectsArray}

// let limpiar = new Todo('limpiar la casa', 'tirar todo a la mierda, pasar la aspiradora, recoger la pelusa del arbol y limpiar los pisos', 'baja', false)
// let gym = new Todo('ir al gym', 'trabajar brazos y pecho', 'baja', false)
// let lavar = new Todo('lavar ropa', 'lavar sabanas y calzones', 'alta', false)
// let compras = new Todo('realizar las compras', 'comprar un pollo y una manteca', 'media', false)