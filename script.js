var players = []

function newPlayer() {
    var newPlayer = {
        nome: prompt('Insira um nome: '),
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
      };

    players.push(newPlayer);
    exibirJogadores(players);
}

function calcPontos(players){
    var pontos = (players.vitorias + players.empates) / 2
    return pontos
}
  
function exibirJogadores(players) {
    var html = ""
    for(var i=0; i < players.length; i++) {
      html += "<tr><td>" + players[i].nome + "</td>"
      html += "<td>" + players[i].vitorias + "</td>"
      html += "<td>" + players[i].empates + "</td>"
      html += "<td>" + players[i].derrotas + "</td>"
      html += "<td>" + players[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    }
    
    var playersTable = document.getElementById("tabelaJogadores")
    playersTable.innerHTML = html
}
  
function adicionarVitoria(i){
    var player = players[i]
    player.vitorias++
    player.pontos = calcPontos(player)
    exibirJogadores(players)
}
  
function adicionarEmpate(){
    for(i=0;i<players.length;i++){
        var player = players[i]
        player.empates++
        player.pontos = calcPontos(player)
        exibirJogadores(players)  
    }
}
  
function adicionarDerrota(i){
    var player = players[i]
    player.derrotas++
    player.pontos = calcPontos(player)
    exibirJogadores(players)
}

function zerarPontos(){
    for (i=0; i< players.length; i++){
        players[i].vitorias = 0;
        players[i].empates = 0;
        players[i].derrotas = 0;
        players[i].pontos = 0;
        exibirJogadores(players)
    }
}