class RegistroDeTarefas{
    constructor(tarefa){
        this.tarefa = tarefa
    }
} 
function salvar(e){
    e.preventDefault()
    const tarefa = document.querySelector("input[name='tarefa'").value 
   const novaTarefa = new RegistroDeTarefas(tarefa)
   
    if(novaTarefa.tarefa != "" && novaTarefa.tarefa.length < 100){ //Criei um laço onde eu verifico se o input esta inserido algum valor e caso o total de teclas não ultrapassa 100 digitos

        let novoParagrafo = document.createElement("section" ) //Uso uma string para criar uma section no HTML
        const para = document.createElement("p"); //Crio um paragrafo para armazenar a tarefa
        var numero1 = document.createTextNode(novaTarefa.tarefa )//Pego o valor digitado no input
        para.appendChild(numero1);//Acrescento o valor do input no paragrafo
        novoParagrafo.appendChild(para)//Acrescento o paragrafo na section
        let body = document.querySelector("body")//Acrescento a section no corpo do html
        body.appendChild(novoParagrafo)
        novoParagrafo.setAttribute("class", "novoAdicionado")//Coloco uma class na section criada
        let apagarTarefa = document.createElement("button")//Crio o botão de excluir a tarefa
        novoParagrafo.appendChild(apagarTarefa)//Acrescento na section criada
        apagarTarefa.textContent = 'X';//Texto que ira aparecer no botão
        apagarTarefa.addEventListener('click',function(){ //Crio uma função para excluir a função criada pelo úsuario
            let novoAdicionado = document.querySelector(".novoAdicionado")
            document.body.removeChild(novoAdicionado)
        })
        document.querySelector("input[name='tarefa'").value = "" //Resetando o campo de input
    }else{
        alert("Digite a tarefa, por favor!")
    }
}






