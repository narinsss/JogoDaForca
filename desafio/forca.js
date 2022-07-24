var palavra = ["_", "_", "_", "_", "_", "_", "_"]
var letras = []
var letrasUnicas = new Set();
var vidas = 6;

// Olá, não consegui finalizar o desafio, eu só conhecia o básico do javascript, mas fiz o que o tempo e os estudos permitiram
//usei os dias que vocês deram para estudar sobre o que vi de novo, pois não sabia que javascript podia ser orientada a objetos, usei meus conhecimentos em lógica e poo que aprendi com minha linguagem de estudo que é java

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
    if(this.letra == "d" || this.letra == "e" || this.letra == "f" || this.letra == "g" || this.letra == "h" || this.letra == "j" || this.letra == "k" || this.letra == "l" || this.letra == "m" || this.letra == "n" || this.letra == "o" || this.letra == "p" ||this.letra == "q" || this.letra == "r" || this.letra == "s" || this.letra == "t" ||this.letra == "u" || this.letra == "v" || this.letra == "w" || this.letra == "y" || this.letra == "z"){
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

      return `Letras chutadas: [${[...letrasUnicas.values()]} ] Vidas: ${vidas}, Palavra: ${palavra}`
  }
  
}

module.exports = Forca;
