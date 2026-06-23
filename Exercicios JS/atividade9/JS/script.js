// Elementos
const tarefas = document.querySelector('input')
const ul = document.querySelector('ul')

// Eventos/Funções
tarefas.addEventListener('keyup', function(event){

    if(event.key === 'Enter') {
        //adicuonar elemento Li na lista
        let newtarefa = document.createElement('li')
        newtarefa.innerText = tarefas.value
        ul.appendChild(newtarefa)

        // Limpar o campo de texto
        tarefas.value = ""
    }
})