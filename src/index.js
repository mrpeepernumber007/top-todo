class Todo {
    constructor(title, description, priority, done){
        this.title = title
        this.description = description
        this.priority = priority
        this.done = done
    }

    changeToDone() {
        this.done = !this.done
    }
}

class Project {
    constructor(title, color) {
        this.title = title
        this.color = color
        this.todos = []
    }

    addTodo(todo) {
        this.todos.push(todo)
    }
    removeTodo(todo) {
        for (let i = 0; i<this.todos.length; i++) {
            if (this.todos[i].title === todo.title) {
                this.todos.splice(i, 1)
            }
        }
    }
}


let limpiar = new Todo('limpiar la casa', 'tirar todo a la mierda, pasar la aspiradora, recoger la pelusa del arbol y limpiar los pisos', 'baja', false)
let casa = new Project('casa', 'rojo')
let gym = new Todo('ir al gym', 'trabajar brazos y pecho', 'baja', false)
let lavar = new Todo('lavar ropa', 'lavar sabanas y calzones', 'alta', false)
let compras = new Todo('realizar las compras', 'comprar un pollo y una manteca', 'media', false)
