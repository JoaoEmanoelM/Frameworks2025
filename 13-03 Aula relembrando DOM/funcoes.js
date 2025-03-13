function elementos(e){

    let div=document.getElementsByTagName("div")[0];

    console.log(div.nextElementSibling);
}

function criarTabela(){
    let pai=document.getElementsByTagName("body")[0];

    let tabela=document.createElement('table');

    tabela.setAttribute('border', 1);

    for (let i=0;i<10;i++){

        let linha=document.createElement('tr')

        for (let j=0;j<10;j++){
            let coluna=document.createElement('td')
            coluna.innerHTML="Célula "
            linha.appendChild(coluna)
        }
        tabela.appendChild(linha);

    }

    pai.appendChild(tabela)
}



