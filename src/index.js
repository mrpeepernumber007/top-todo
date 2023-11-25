class Todo {
    constructor(title, description, priority, done){
        this.title = title
        this.description = description
        this.priority = priority
        this.done = false
    }

    changeToDone() {
        this.done = !this.done
    }

    deleteTodo() {
        //self destruct button
    }
}

class Project {
    constructor(title, color) {
        this.title = title
        this.color = color
        this.todos = []
    }

    addTodo() {
        //add Todo
    }
}

