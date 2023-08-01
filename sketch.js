
1
//variáveis da bolinha
2
let xBolinha = 300;
3
let yBolinha = 200;
4
let diametro = 15;
5
let raio = diametro / 2 ;
6
​
7
//velocidade da bolinha
8
let velocidadeXBolinha = 6;
9
let velocidadeYBolinha = 6;
10
​
11
​
12
//variáveis da raquete
13
let xRaquete = 5;
14
let yRaquete = 150;
15
let raqueteComprimento = 10;
16
let raqueteAltura = 90;
17
let xRaqueteOponente = 590;
18
let yRaqueteOponente = 150;
19
let velocidadeYOponente;
20
function setup() {
21
  createCanvas(600, 400);
22
}
23
​
24
function draw() {
25
  background(0);
26
  mostraBolinha();
27
  movimentaBolinha();
28
  verificaColisaoBorda();
29
  mostraRaquete();
30
  mostraRaqueteOponente();
31
  movimentaMinhaRaquete();
32
  movimentaRaqueteOponente();
33
  verificaColisaoRaquete();
34
}
35
​
36
function mostraBolinha(){
37
  circle(xBolinha, yBolinha, diametro);
38
}
39
​
40
function movimentaBolinha(){
41
  xBolinha += velocidadeXBolinha;
42
  yBolinha += velocidadeYBolinha;
43
}
44
​
45
function verificaColisaoBorda(){
46
  if (xBolinha + raio> width ||
47
     xBolinha - raio< 0){
48
    velocidadeXBolinha *= -1;
