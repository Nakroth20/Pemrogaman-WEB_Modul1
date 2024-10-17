document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span> <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
        
        document.getElementById('taskList').appendChild(li);

        taskInput.value = '';

        // Tambahkan event listener untuk tombol edit dan delete
        li.querySelector('.edit-btn').addEventListener('click', () => editTask(li));
        li.querySelector('.delete-btn').addEventListener('click', () => deleteTask(li));
    }
}

function editTask(li) {
    const span = li.querySelector('span');
    const oldText = span.textContent;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = oldText;

    // Ganti tampilan teks dengan input
    li.insertBefore(input, span);
    li.removeChild(span);

    // Ganti tombol "Edit" dengan "Save"
    const editBtn = li.querySelector('.edit-btn');
    editBtn.textContent = 'Save';

    // Fungsi saat tombol "Save" ditekan
    editBtn.onclick = function() {
        const newText = input.value.trim();
        if (newText !== '') {
            span.textContent = newText;
            li.insertBefore(span, input);
            li.removeChild(input);
            editBtn.textContent = 'Edit';
            editBtn.onclick = () => editTask(li);
        }
    };
}

function deleteTask(li) {
    document.getElementById('taskList').removeChild(li);
}
