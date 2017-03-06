function calculoPeso(){
var gMercurio = 3.72;
var gVenus = 8.82;
var gMarte = 3.72;
var gTierra = 9.8;
var gJupiter = 23.13;
var gSaturno = 9.01;
var gUrano = 8.72;
var gNeptuno = 10-97;
var gPluton = 0.65;

var peso = document.getElementById('peso').value;
var planeta = document.getElementById('planeta').value;
var resultado ;

	if(planeta == "Mercurio"){
		resultado = peso / gTierra * gMercurio;
	}
	if(planeta == "Venus"){
		resultado = peso / gTierra * gVenus;
	}
	if(planeta == "Marte"){
		resultado = peso / gTierra * gMarte;
	}
	if(planeta == "Tierra"){
		resultado = peso / gTierra * gTierra;
	}
	if(planeta == "Jupiter"){
		resultado = peso / gTierra * gJupiter;
	}
	if(planeta == "Saturno"){
		resultado = peso / gTierra * gSaturno;
	}
	if(planeta == "Urano"){
		resultado = peso / gTierra * gUrano;
	}
	if(planeta == "Neptuno"){
		resultado = peso / gTierra * gNeptuno;
	}
	if(planeta == "Venus"){
		resultado = peso / gTierra * gVenus;
	}

	document.getElementById('resultado').innerHTML = "Tu Peso en " + planeta + " es: "+(resultado).toFixed(2);
}

function show(){
  var peso = document.getElementById('peso').value;
  var masa = (peso/9.8).toFixed(2);
  document.getElementById('resultado').innerHTML ="Mercurio : " + (masa*3.70).toFixed(2) +"\n"+
        "Venus    : " + (masa*8.87).toFixed(2) +"\n"+
        "Marte    : " + (masa*3.71).toFixed(2) +"\n"+
        "Júpiter  : " + (masa*23.12).toFixed(2) +"\n"+
        "Saturno  : " + (masa*8.96).toFixed(2) +"\n"+
        "Urano    : " + (masa*8.69).toFixed(2) +"\n"+
        "Neptuno  : " + (masa*11).toFixed(2) +"\n"+
        "Plutón   : " + (masa*0.81).toFixed(2) +"\n";
}
