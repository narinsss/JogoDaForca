### Jogo Forca 

cd startdb-2022

npm start

##### Arquivo para implementar a lógica de funcionamento:

forca.js

##### Métodos a serem implementados:

chutar
buscarEstado
buscarDadosDoJogo

##### *Regras de arquivos: 

não alterar o nome dos métodos já criados
não alterar outros arquivos além do forca.js
pode criar outros métodos

##### *Regras de jogo:

- Iniciar com 6 vidas;
- Iniciar com estado "aguardando chute";
- Todo chute deve conter apenas 1 letra, caso tenha mais não irá alterar nenhum estado;
- Caso a letra chutada já tenha sido mencionada anteriormente, e errada, não irá alterar nenhum estado;
- Registrar letras chutadas em "letrasChutadas";
- Subtrair uma vida ao chutar uma letra errada;
- Caso a letra esteja correta, mostrar em sua respectiva posição;
- Vidas = 0, estado de jogo "perdeu";
- Vidas > 0, e jogador acertou a última letra, estado de jogo "ganhou";