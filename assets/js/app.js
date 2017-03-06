document.getElementById("calcular").onclick = function Peso() {
  var peso = prompt("Ingresa tu peso");
  var masa = (peso/9.8).toFixed(2);
  alert("Mercurio : " + (masa*3.70).toFixed(2) +"\n"+
        "Venus      : " + (masa*8.87).toFixed(2) +"\n"+
        "Marte      : " + (masa*3.71).toFixed(2) +"\n"+
        "Júpiter     : " + (masa*23.12).toFixed(2) +"\n"+
        "Saturno   : " + (masa*8.96).toFixed(2) +"\n"+
        "Urano      : " + (masa*8.69).toFixed(2) +"\n"+
        "Neptuno  : " + (masa*11).toFixed(2) +"\n"+
        "Plutón      : " + (masa*0.81).toFixed(2) +"\n")
        
}
