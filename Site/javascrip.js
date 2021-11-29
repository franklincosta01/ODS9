
  // Evento para o click do botao
  window.onload = () => 
  {
    
    var listabotao = document.querySelectorAll("button.btn")
      listabotao.forEach(botao =>
        { 
            botao.addEventListener ("click", (eventoclickbotao)=>
            { 

                eventoclickbotao.preventDefault()
                location.href=eventoclickbotao.target.id+"\\"+eventoclickbotao.target.id+'.html'

            })

        })
        
  }


  
