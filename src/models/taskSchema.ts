import Task from './task';

// Cria uma nova tarefa
const newTask = new Task({
    title: 'Comprar mantimentos',
    description: 'Comprar leite, pão e ovos',
    dueDate: new Date('2024-05-15'),
    completed: false
});

// Salva a nova tarefa no banco de dados
newTask.save()
    .then(task => {
        console.log('Tarefa salva:', task);
    })
    .catch(error => {
        console.error('Erro ao salvar tarefa:', error);
    });