     let sil =0;
     let nome ="";
     let daniel =0;
     let total =0;
function silvio(){
    sil ++;
    nome = "Silvio";
    document.getElementById("votos_para_silvio").innerHTML = sil;
    document.getElementById("seu_voto").innerHTML = nome;
}
function vasconcelos(){
    daniel ++;
    nome = "Daniel";
    document.getElementById("votos_para_vasconcelos").innerHTML = daniel;
    document.getElementById("seu_voto").innerHTML = nome;
}
function total_votos (){
    total = (daniel + sil);
  document.getElementById("total_de_votos").innerHTML = total;
}

