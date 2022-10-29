//Passo 1 - Pegar os elementos que representam as abas do HTML
const abas = document.querySelectorAll(".aba");


abas.forEach(aba => { 
    //Passo 2 - Identificar o clique no elemento da aba 
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionada")){
            return;
        }
        selecionarAba(aba)
        exibirInformacoesDaAba(aba)
    })
})

function selecionarAba(aba){
    //Passo 3 - Quando o usuário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionada");
    abaSelecionada.classList.remove("selecionada")

    //Passo 4 - Marcar a aba clicada como selecionada
    aba.classList.add("selecionada");
}

function exibirInformacoesDaAba(aba){
    //Passo 5 - Esconder a aba anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionada");
    informacaoSelecionada.classList.remove("selecionada")

    //Passo 6 - Mostrar o conteúdo da aba selecionada
    const idDoElementodeInformacoesDaAba = `informacao-${aba.id}`
    const informacaoASerMostrada = document.getElementById(idDoElementodeInformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionada")
}