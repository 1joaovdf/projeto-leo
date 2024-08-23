const itemInput = document.querySelector('.itemInput');   /*digitado pela pesssoa nome do produto*/
const quantidade = document.querySelector('.quantidade'); /*digitado pela pesssoa quantidade*/
const Adicionar = document.querySelector('.Adicionar');   /*botao */
const ul = document.querySelector('.lista')               /*ul no html */

let items = []
let quant = []

function valorinput(){
    if (itemInput.value.trim() !== '' && quantidade.value.trim() !== '' && quantidade.value.trim() > 0) {
    items.push({
        nomeItem: itemInput.value,
        concluir: false
    })
    quant.push(quantidade.value)

        quantidade.value = ''
        itemInput.value = ''
    
        listasTela()

}else{
    window.alert("Por favor, preencha todos os campos antes de adicionar um item.");
}
}

function listasTela(){

    let novaLista = ''


    items.forEach(function(element,i){
        novaLista = novaLista + `
        <li class="item ${element.concluir && "feito"}">
            <img class="check" src="img/check.png" alt="" onclick="concluirItem(${i})">
            <p>${element.nomeItem}</p>
            <p>${quant[i]}</p>
            <img src="img/editar.png" alt="" onclick="editar(${i})">
            <img src="img/lixo.png" alt="" onclick="deletar(${i})">
        </li>
        ` 
    })

    ul.innerHTML = novaLista
}

function concluirItem(i){
    items[i].concluir = !items[i].concluir
    
    listasTela()

}

function editar(i){

    
    itemInput.value = items[i].nomeItem;
    quantidade.value = quant[i]

    deletar(i)
    
}

function deletar(i){
    items.splice(i,1)
    quant.splice(i,1)

    listasTela()
}


Adicionar.addEventListener('click', valorinput)
