let gotas = [];
let solo;
let tipoSolo = "vegetacao"; // valor inicial
let arvores = []; // Array para armazenar as árvores
let helicoptero; // Variável para armazenar o helicóptero
let passaros = []; // Array para armazenar os pássaros
let carros = []; // Array para armazenar os carros

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("canvas-holder");
  solo = new Solo(tipoSolo);
  // Inicializa algumas árvores aleatoriamente no solo se o tipo for vegetação
  if (tipoSolo === "vegetacao") {
    for (let i = 0; i < 5; i++) {
      let x = random(width);
      arvores.push(new Arvore(x, solo.altura));
    }
    // Cria um helicóptero
    helicoptero = new Helicoptero(100, 50); // Posição inicial do helicóptero
  }
  if (tipoSolo === "exposto") {
    // Cria alguns pássaros
    for (let i = 0; i < 3; i++) { // Cria 3 pássaros
      let x = random(width * 0.7, width); // Posição horizontal do morro
      let y = random(height / 2, height - 100); // Posição vertical do morro
      passaros.push(new Passaro(x, y));
    }
  }
  if (tipoSolo === "urbanizado") {
    // Cria alguns carros
    for (let i = 0; i < 3; i++) {
      let x = random(width / 4, width - width / 4);
      let y = solo.altura - 20; // Posição y dos carros
      carros.push(new Carro(x, y));
    }
  }
}

function draw() {
  background(200, 220, 255); // céu

  for (let i = gotas.length - 1; i >= 0; i--) {
    gotas[i].cair();
    gotas[i].mostrar();

    if (gotas[i].atingeSolo(solo.altura)) {
      solo.aumentarErosao();
      gotas.splice(i, 1);
    }
  }

  solo.mostrar();

  // Mostra e atualiza as árvores
  if (tipoSolo === "vegetacao") { // Verifica novamente antes de mostrar as árvores
    for (let arvore of arvores) {
      arvore.mostrar();
    }
    helicoptero.mostrar();
    helicoptero.voar();
  }

  // Mostra e atualiza o helicóptero
  if (tipoSolo === "exposto") {
    for (let passaro of passaros) {
      passaro.voar();
      passaro.mostrar();
    }
  }
  if (tipoSolo === "urbanizado") {
    for (let carro of carros) {
      carro.mostrar();
      carro.mover();
    }
  }


  if (frameCount % 5 === 0) {
    gotas.push(new Gota());
  }
}

function setSoilType(tipo) {
  tipoSolo = tipo;
  solo = new Solo(tipoSolo);
  arvores = []; // Limpa as árvores ao mudar o tipo de solo
  passaros = [];
  carros = []; // Limpa os carros
  if (tipoSolo === "vegetacao") { // Verifica se o tipo de solo é vegetacao
    // Adiciona algumas árvores novamente no novo solo
    for (let i = 0; i < 5; i++) {
      let x = random(width);
      arvores.push(new Arvore(x, solo.altura));
    }
  }
  if (tipoSolo === "exposto") {
    // Cria alguns pássaros
    for (let i = 0; i < 3; i++) { // Cria 3 pássaros
      let x = random(width * 0.7, width); // Posição horizontal do morro
      let y = random(height / 2, height - 100); // Posição vertical do morro
      passaros.push(new Passaro(x, y));
    }
  }let gotas = [];
let solo;
let tipoSolo = "vegetacao"; // valor inicial
let arvores = []; // Array para armazenar as árvores
let helicoptero; // Variável para armazenar o helicóptero
let passaros = []; // Array para armazenar os pássaros
let carros = []; // Array para armazenar os carros

function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("canvas-holder");
  solo = new Solo(tipoSolo);
  // Inicializa algumas árvores aleatoriamente no solo se o tipo for vegetação
  if (tipoSolo === "vegetacao") {
    for (let i = 0; i < 5; i++) {
      let x = random(width);
      arvores.push(new Arvore(x, solo.altura));
    }
    // Cria um helicóptero
    helicoptero = new Helicoptero(100, 50); // Posição inicial do helicóptero
  }
  if (tipoSolo === "exposto") {
    // Cria alguns pássaros
    for (let i = 0; i < 3; i++) { // Cria 3 pássaros
      let x = random(width * 0.7, width); // Posição horizontal do morro
      let y = random(height / 2, height - 100); // Posição vertical do morro
      passaros.push(new Passaro(x, y));
    }
  }
  if (tipoSolo === "urbanizado") {
    // Cria alguns carros
    for (let i = 0; i < 3; i++) {
      let x = random(width / 4, width - width / 4);
      let y = solo.altura - 20; // Posição y dos carros
      carros.push(new Carro(x, y));
    }
  }
}

function draw() {
  background(200, 220, 255); // céu

  for (let i = gotas.length - 1; i >= 0; i--) {
    gotas[i].cair();
    gotas[i].mostrar();

    if (gotas[i].atingeSolo(solo.altura)) {
      solo.aumentarErosao();
      gotas.splice(i, 1);
    }
  }

  solo.mostrar();

  // Mostra e atualiza as árvores
  if (tipoSolo === "vegetacao") { // Verifica novamente antes de mostrar as árvores
    for (let arvore of arvores) {
      arvore.mostrar();
    }
    helicoptero.mostrar();
    helicoptero.voar();
  }

  // Mostra e atualiza o helicóptero
  if (tipoSolo === "exposto") {
    for (let passaro of passaros) {
      passaro.voar();
      passaro.mostrar();
    }
  }
  if (tipoSolo === "urbanizado") {
    for (let carro of carros) {
      carro.mostrar();
      carro.mover();
    }
  }


  if (frameCount % 5 === 0) {
    gotas.push(new Gota());
  }
}

function setSoilType(tipo) {
  tipoSolo = tipo;
  solo = new Solo(tipoSolo);
  arvores = []; // Limpa as árvores ao mudar o tipo de solo
  passaros = [];
  carros = []; // Limpa os carros
  if (tipoSolo === "vegetacao") { // Verifica se o tipo de solo é vegetacao
    // Adiciona algumas árvores novamente no novo solo
    for (let i = 0; i < 5; i++) {
      let x = random(width);
      arvores.push(new Arvore(x, solo.altura));
    }
  }
  if (tipoSolo === "exposto") {
    // Cria alguns pássaros
    for (let i = 0; i < 3; i++) { // Cria 3 pássaros
      let x = random(width * 0.7, width); // Posição horizontal do morro
      let y = random(height / 2, height - 100); // Posição vertical do morro
      passaros.push(new Passaro(x, y));
    }
  }
  if (tipoSolo === "urbanizado") {
    // Cria alguns carros
    for (let i = 0; i < 3; i++) {
      let x = random(width / 4, width - width / 4);
      let y = solo.altura - 20; // Posição y dos carros
      carros.push(new Carro(x, y));
    }
  }
  // Não precisa atualizar a posição do helicóptero, pois ele voa no céu
}

class Gota {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.vel = random(4, 6);
  }

  cair() {
    this.y += this.vel;
  }

  mostrar() {
    stroke(0, 0, 200);
    line(this.x, this.y, this.x, this.y + 10);
  }

  atingeSolo(ySolo) {
    return this.y > ySolo;
  }
}

class Solo {
  constructor(tipo) {
    this.tipo = tipo;
    this.altura = height - 80;
    this.erosao = 0;
  }

  aumentarErosao() {
    let taxa;
    if (this.tipo === "vegetacao") taxa = 0.05; // Erosão menor com vegetação
    else if (this.tipo === "exposto") taxa = 0.2; // Erosão maior no solo exposto
    else if (this.tipo === "urbanizado") taxa = 0.1; // Erosão moderada no solo urbanizado

    this.erosao += taxa;
    this.altura += taxa;
    // Atualiza a posição das árvores existentes
    for (let arvore of arvores) {
      arvore.yBase = this.altura;
    }
  }

  mostrar() {
    noStroke();
    if (this.tipo === "vegetacao") fill(60, 150, 60);
    else if (this.tipo === "exposto") fill(139, 69, 19);
    else if (this.tipo === "urbanizado") fill(120);

    rect(0, this.altura, width, height - this.altura);

    fill(0);
    textSize(14);
    textAlign(LEFT);
    text(`Erosão: ${this.erosao.toFixed(1)}`, 10, 20);
    text(`Tipo de solo: ${this.tipo}`, 10, 40);
  }
}

class Arvore {
  constructor(x, yBase) {
    this.x = x;
    this.yBase = yBase;
    this.alturaTronco = random(20, 50);
    this.larguraTronco = 5;
    this.alturaCopa = random(30, 50);
    this.larguraCopa = this.alturaCopa * 0.8;
    this.corTronco = color(101, 67, 33);
    this.corCopa = color(34, 139, 34);
  }

  mostrar() {
    // Tronco
    fill(this.corTronco);
    rect(this.x - this.larguraTronco / 2, this.yBase - this.alturaTronco, this.larguraTronco, this.alturaTronco);

    // Copa
    fill(this.corCopa);
    ellipse(this.x, this.yBase - this.alturaTronco - this.alturaCopa / 2, this.larguraCopa, this.alturaCopa);
  }
}

class Helicoptero {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamanho = 40;
    this.velocidade = 2;
    this.corCorpo = color(150); // Cinza
    this.corRotor = color(200); // Cinza claro
    this.direcao = 1; // 1 para direita, -1 para esquerda
  }

  voar() {
    this.x += this.velocidade * this.direcao;
    // Limites horizontais com retorno
    if (this.x > width - this.tamanho || this.x < this.tamanho) {
      this.direcao *= -1; // Inverte a direção
    }
    this.y += random(-1, 1); // Pequeno movimento vertical aleatório
  }

  mostrar() {
    // Corpo do helicóptero
    fill(this.corCorpo);
    rect(this.x - this.tamanho / 2, this.y - this.tamanho / 4, this.tamanho, this.tamanho / 2);

    // Rotor principal
    fill(this.corRotor);
    ellipse(this.x, this.y - this.tamanho / 4, this.tamanho * 1.5, this.tamanho / 4);

    // Rotor de cauda
    rect(this.x - this.tamanho / 2, this.y + this.tamanho / 4, this.tamanho / 4, this.tamanho / 8);
  }
}

class Passaro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamanho = random(10, 20);
    this.velocidade = random(2, 5);
    this.cor = color(random(50, 200)); // Cor aleatória
    this.direcao = random([-1, 1]); // Direção inicial aleatória
  }

  voar() {
    this.x += this.velocidade * this.direcao;
    // Limites horizontais com retorno
    if (this.x > width || this.x < 0) {
      this.direcao *= -1;
    }
    this.y += random(-1, 1); // Pequeno movimento vertical aleatório
  }

  mostrar() {
    // Corpo do pássaro
    fill(this.cor);
    ellipse(this.x, this.y, this.tamanho, this.tamanho * 0.6);
    // Asas do pássaro
    stroke(this.cor);
    line(this.x - this.tamanho / 2, this.y, this.x, this.y - this.tamanho / 3);
    line(this.x + this.tamanho / 2, this.y, this.x, this.y - this.tamanho / 3);
  }
}

class Carro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.largura = 40;
    this.altura = 20;
    this.cor = color(random(255)); // Cor aleatória
    this.velocidade = random(1, 3);
    this.direcao = random([-1, 1]); // Direção aleatória inicial
  }

  mover() {
    this.x += this.velocidade * this.direcao;
    // Limites horizontais com retorno
    if (this.x > width || this.x < 0) {
      this.direcao *= -1;
    }
  }

  mostrar() {
    // Corpo do carro
    fill(this.cor);
    rect(this.x - this.largura / 2, this.y - this.altura / 2, this.largura, this.altura);

    // Rodas
    fill(0); // Cor preta das rodas
    ellipse(this.x - this.largura / 4, this.y + this.altura / 2, 8, 8); // Roda esquerda
    ellipse(this.x + this.largura / 4, this.y + this.altura / 2, 8, 8); // Roda direita
  }
}

  if (tipoSolo === "urbanizado") {
    // Cria alguns carros
    for (let i = 0; i < 3; i++) {
      let x = random(width / 4, width - width / 4);
      let y = solo.altura - 20; // Posição y dos carros
      carros.push(new Carro(x, y));
    }
  }
  // Não precisa atualizar a posição do helicóptero, pois ele voa no céu
}

class Gota {
  constructor() {
    this.x = random(width);
    this.y = 0;
    this.vel = random(4, 6);
  }

  cair() {
    this.y += this.vel;
  }

  mostrar() {
    stroke(0, 0, 200);
    line(this.x, this.y, this.x, this.y + 10);
  }

  atingeSolo(ySolo) {
    return this.y > ySolo;
  }
}

class Solo {
  constructor(tipo) {
    this.tipo = tipo;
    this.altura = height - 80;
    this.erosao = 0;
  }

  aumentarErosao() {
    let taxa;
    if (this.tipo === "vegetacao") taxa = 0.05; // Erosão menor com vegetação
    else if (this.tipo === "exposto") taxa = 0.2; // Erosão maior no solo exposto
    else if (this.tipo === "urbanizado") taxa = 0.1; // Erosão moderada no solo urbanizado

    this.erosao += taxa;
    this.altura += taxa;
    // Atualiza a posição das árvores existentes
    for (let arvore of arvores) {
      arvore.yBase = this.altura;
    }
  }

  mostrar() {
    noStroke();
    if (this.tipo === "vegetacao") fill(60, 150, 60);
    else if (this.tipo === "exposto") fill(139, 69, 19);
    else if (this.tipo === "urbanizado") fill(120);

    rect(0, this.altura, width, height - this.altura);

    fill(0);
    textSize(14);
    textAlign(LEFT);
    text(`Erosão: ${this.erosao.toFixed(1)}`, 10, 20);
    text(`Tipo de solo: ${this.tipo}`, 10, 40);
  }
}

class Arvore {
  constructor(x, yBase) {
    this.x = x;
    this.yBase = yBase;
    this.alturaTronco = random(20, 50);
    this.larguraTronco = 5;
    this.alturaCopa = random(30, 50);
    this.larguraCopa = this.alturaCopa * 0.8;
    this.corTronco = color(101, 67, 33);
    this.corCopa = color(34, 139, 34);
  }

  mostrar() {
    // Tronco
    fill(this.corTronco);
    rect(this.x - this.larguraTronco / 2, this.yBase - this.alturaTronco, this.larguraTronco, this.alturaTronco);

    // Copa
    fill(this.corCopa);
    ellipse(this.x, this.yBase - this.alturaTronco - this.alturaCopa / 2, this.larguraCopa, this.alturaCopa);
  }
}

class Helicoptero {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamanho = 40;
    this.velocidade = 2;
    this.corCorpo = color(150); // Cinza
    this.corRotor = color(200); // Cinza claro
    this.direcao = 1; // 1 para direita, -1 para esquerda
  }

  voar() {
    this.x += this.velocidade * this.direcao;
    // Limites horizontais com retorno
    if (this.x > width - this.tamanho || this.x < this.tamanho) {
      this.direcao *= -1; // Inverte a direção
    }
    this.y += random(-1, 1); // Pequeno movimento vertical aleatório
  }

  mostrar() {
    // Corpo do helicóptero
    fill(this.corCorpo);
    rect(this.x - this.tamanho / 2, this.y - this.tamanho / 4, this.tamanho, this.tamanho / 2);

    // Rotor principal
    fill(this.corRotor);
    ellipse(this.x, this.y - this.tamanho / 4, this.tamanho * 1.5, this.tamanho / 4);

    // Rotor de cauda
    rect(this.x - this.tamanho / 2, this.y + this.tamanho / 4, this.tamanho / 4, this.tamanho / 8);
  }
}

class Passaro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.tamanho = random(10, 20);
    this.velocidade = random(2, 5);
    this.cor = color(random(50, 200)); // Cor aleatória
    this.direcao = random([-1, 1]); // Direção inicial aleatória
  }

  voar() {
    this.x += this.velocidade * this.direcao;
    // Limites horizontais com retorno
    if (this.x > width || this.x < 0) {
      this.direcao *= -1;
    }
    this.y += random(-1, 1); // Pequeno movimento vertical aleatório
  }

  mostrar() {
    // Corpo do pássaro
    fill(this.cor);
    ellipse(this.x, this.y, this.tamanho, this.tamanho * 0.6);
    // Asas do pássaro
    stroke(this.cor);
    line(this.x - this.tamanho / 2, this.y, this.x, this.y - this.tamanho / 3);
    line(this.x + this.tamanho / 2, this.y, this.x, this.y - this.tamanho / 3);
  }
}

class Carro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.largura = 40;
    this.altura = 20;
    this.cor = color(random(255)); // Cor aleatória
    this.velocidade = random(1, 3);
    this.direcao = random([-1, 1]); // Direção aleatória inicial
  }

  mover() {
    this.x += this.velocidade * this.direcao;
    // Limites horizontais com retorno
    if (this.x > width || this.x < 0) {
      this.direcao *= -1;
    }
  }

  mostrar() {
    // Corpo do carro
    fill(this.cor);
    rect(this.x - this.largura / 2, this.y - this.altura / 2, this.largura, this.altura);

    // Rodas
    fill(0); // Cor preta das rodas
    ellipse(this.x - this.largura / 4, this.y + this.altura / 2, 8, 8); // Roda esquerda
    ellipse(this.x + this.largura / 4, this.y + this.altura / 2, 8, 8); // Roda direita
  }
}
