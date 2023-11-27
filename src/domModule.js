export function domTodo(title, description) {
    const singleTd = document.createElement('div')
    singleTd.classList.add('s-todo')
    singleTd.innerHTML = `
    <button class="delete-todo-btn">X</button>
    <input type="checkbox" class="done-btn">
    <div class="todo-text">
        <h3 class="todo-title">${title}</h3>
        <p class="todo-description">${description}</p>
    </div>
    <div class="priority-select">
        <label for="priority">Select a priority</label>
        <select name="prt" id="priority">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
    </div>
    `
    const todosUl = document.querySelector('.todos-ul')
    todosUl.appendChild(singleTd)
}