var rafaela = {nome:"rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var guilherme = {nome: "gui", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var paulo = {nome: "paulinho", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var luciane = { nome: "luly", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};
var gabriel = { nome: "Gab", vitorias: 0, empates: 0, derrotas: 0, pontos: 0};

rafaela.pontos = calculaPontos(rafaela);
guilherme.pontos = calculaPontos(guilherme);
paulo.pontos = calculaPontos (paulo);
luciane.pontos = calculaPontos(luciane);
gabriel.pontos = calculaPontos(gabriel);

function calculaPontos(jogador){
   var pontos = (jogador.vitorias * 3) + jogador.empates;
   return pontos;
}

var jogadores = [rafaela, guilherme, paulo, luciane, gabriel];

function exibeJogadoresNaTela(jogadores){
  var elemento = "";
  for( var i=0; i<jogadores.length; i++){
    elemento += "<tr><td>" + jogadores[i].nome + "<td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;

  exibeJogadoresNaTela(jogadores);
}

function adicionarVitoria(i){
  var j = 0;
  var jogador = jogadores[i];
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  j = i;
  for (var i = 0; i < jogadores.length; i++){
    jogadores[i].derrotas++;
    jogador.pontos = calculaPontos(jogador)
  }
  exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  for (var i = 0; i < jogadores.length; i++){
    var jogador = jogadores[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador)
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  exibeJogadoresNaTela(jogadores)
}

function adicionarJogador(){
  var novoJogador = document.getElementById("jogador").value;
  if (novoJogador != "") {
      jogador.innerHTML = novoJogador;
      var novoJogador = { nome: novoJogador, vitorias: 0, empates: 0, derrotas: 0, pontos: 0, resultado: "none"};
      jogadores.push(novoJogador);
      novoJogador.pontos = calculaPontos(novoJogador);
      exibeJogadoresNaTela(jogadores);
    } else {
    alert("O nome do jogador é obrigatório");
  }
  document.getElementById("jogador").value = "";
}

function resetarJogo(){
  for (var i=0; i<jogadores.length; i++){
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}

function verificar(){
  var j = 0;
  var pt_max = 0;
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].resultado = "none";
    if (jogadores[i].pontos > pt_max) {
      pt_max = jogadores[i].pontos;
      j = i;
    }
  }

  if (pt_max != 0) {
    jogadores[j].resultado = "win";
  }
}