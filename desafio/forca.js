var vidas = 6
var palavra = ["_", "_", "_", "_", "_", "_", "_"]
var letras = []
var letrasUnicas = new Set();

class Forca {

  chutar(letra) {
    this.letra = letra;
    letras.push(letra)

    letras.forEach(() => {
      letrasUnicas.add(this.letra);
    });
  }

  buscarEstado() { //certo
    if(vidas < 1)
    return "perdeu"; 
    if(vidas > 0 && palavra == "a,b,a,c,a,x,i")
    return "ganhou"
  }


  buscarDadosDoJogo() {
      if(this.letra != "a" && this.letra != "b" && this.letra != "c" && this.letra != "x" && this.letra != "i" && this.letra != ""){
      this.vidas = vidas--
      }else if(vidas < 1){
      this.buscarEstado
      }else if(vidas == 6 ){
        this.vidas = vidas
      }



      if(this.letra == "a"){
        palavra[0] = "a";
        palavra[2] = "a";
        palavra[4] = "a";
      }else if(this.letra == "b"){
        palavra[1] = "b";
      }else if(this.letra == "c"){
        palavra[3] = "c";
      }else if(this.letra == "x"){
        palavra[5] = "x";
      }else if(this.letra == "i"){
        palavra[6] = "i";
      }

      return `Letras chutadas: [${[...letrasUnicas.values()]} ] Vidas: ${this.vidas}, Palavra: ${palavra}`
  }
  
}

module.exports = Forca;
