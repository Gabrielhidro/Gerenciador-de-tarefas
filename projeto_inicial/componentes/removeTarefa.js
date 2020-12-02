const botaoRemovido = () => {
  const botaoRemover = document.createElement('button')
  botaoRemover.innerText = 'Remover'
  botaoRemover.classList.add('delete-button')
  botaoRemover.addEventListener('click', deletarTarefa)
  
  return botaoRemover
}

const deletarTarefa = function(event){
  const botaoRemove = event.target
  const removerCompleto = botaoRemove.parentElement
  removerCompleto.remove()
}