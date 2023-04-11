const btn = document.querySelector('.btn');
const inputVal = document.querySelector('.todo');
const tbody = document.querySelector('tbody');
let count = 1;
const todos = JSON.parse(localStorage.getItem('todos') || '[]');

window.addEventListener('load', () => {
    todos.forEach(todo => {
        const tr = document.createElement('tr');
        const idx = document.createElement('td');
        const td = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn','dlt')
    
        
        deleteBtn.addEventListener('click', () => {
          deleteFromLocalStorage(idx.innerText);
          tr.remove();
        });
        tr.appendChild(idx);
        tr.appendChild(td);
        tr.appendChild(deleteBtn);
        td.innerText = todo;
        idx.innerText = count++;

        tbody.append(tr);
    })

})


btn.addEventListener('click', () => {
    let todo = inputVal.value;
    if (!todo) alert('empty');
    else {
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));

        const tr = document.createElement('tr');
        const idx = document.createElement('td');
        const td = document.createElement('td');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('btn','dlt')

        deleteBtn.addEventListener('click', () => {
          deleteFromLocalStorage(idx.innerText);
          tr.remove();
        });
        idx.innerText = count++;
        tr.appendChild(idx);
        tr.appendChild(td);
        tr.appendChild(deleteBtn);
        td.innerText = todo;
        todos.forEach(todo => {
            tbody.append(tr);
        });
        inputVal.value = ''
    }

})

function deleteFromLocalStorage(key) {
    todos.splice(key-1,1);
    localStorage.setItem('todos',JSON.stringify(todos))

}
