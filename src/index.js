import { Todo, Project } from './factory.js'
import { createTodo, createProject } from './addModule.js'
import { domTodo } from './domModule.js'

let casa = new Project('casa', 'rojo')
let limpiar = new Todo('limpiar la casa', 'tirar todo a la mierda, pasar la aspiradora, recoger la pelusa del arbol y limpiar los pisos', 'baja', false)
let gym = new Todo('ir al gym', 'trabajar brazos y pecho', 'baja', false)
let lavar = new Todo('lavar ropa', 'lavar sabanas y calzones', 'alta', false)
let compras = new Todo('realizar las compras', 'comprar un pollo y una manteca', 'media', false)

const newTodo = document.getElementById('new-todo')
const newProject = document.getElementById('new-project')

newTodo.addEventListener('click', () => {
    const givenTitle = 'limpiar tacho'
    const givenDescription = 'limpiar tachos de basura de cocina y baño'

    createTodo(givenTitle, givenDescription, casa)
    domTodo(givenTitle, givenDescription)
    console.log(casa);
})

newProject.addEventListener('click', ()=> {
    createProject('cuidado del perro', 'verde')
})



//when data is returned in JSON format, methods should be returned to the objects by way of a function that assings the method to the object's prototype

