let amigos = []
let numeroLimite = 5

function adicionarAmigo(){
    let amigoEscolhido = document.getElementById("amigo").value.trim()

    if (amigoEscolhido === "") {
        alert("Por favor, insira um nome.")
        return;
    } if (amigos.length >= numeroLimite) {
        alert(`Você atingiu o limite de ${numeroLimite} amigos!`)
        return
    }
    amigos.push(amigoEscolhido)
    atualizarLista()
}

function limparLista() {
    document.getElementById("listaAmigos").innerHTML = ""
}

function atualizarLista(){
    let atualizarAmigo = document.getElementById("listaAmigos")
    limparLista()

    for (let i = 0; i < amigos.length; i++){
        let criarItem = document.createElement("li");
        criarItem.textContent = amigos[i];
        atualizarAmigo.appendChild(criarItem)
     }S
}


function sortearAmigo(){
    if(amigos.length !== 0) {
        let indiceSorteado = Math.floor(Math.random() * amigos.length) 
        let amigoSorteado = amigos[indiceSorteado]
        document.getElementById("resultado").innerText = `O amigo sorteado é: ${amigoSorteado}`
    } else {
        alert("Nenhum amigo na lista para sortear!")
        return
    }
}
