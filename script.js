(() => {

  const criarTarefa = function(event){
    event.preventDefault();
   
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value;  
    
    const tarefa = document.createElement('li')
    const conteudo = `<p class="content">${valor}</p>`
  
    tarefa.innerHTML = conteudo;
    tarefa.classList.add('task')
    tarefa.appendChild(botaoConcluido())
    tarefa.appendChild(botaoRemovido())
    lista.appendChild(tarefa)
   
  
    input.value = '';
   }
   
  
   const novaTarefa = document.querySelector('[data-form-button]')
   novaTarefa.addEventListener('click', criarTarefa)
  
})()
