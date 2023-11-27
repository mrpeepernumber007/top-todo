export class Todo {
    constructor(title, description, priority, done){
        this.title = title
        this.description = description
        this.priority = priority
        this.done = done
    }

    changeDone() {
        this.done = !this.done
    }
    changePriority(newPriority){
        this.priority = newPriority
    }
}

export class Project {
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