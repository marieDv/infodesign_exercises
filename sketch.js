

let tileCount = 10;
let r = [];
let g = [];
let b = [];

function setup() {
  createCanvas(400, 400);
  frameRate(20);

  setupColors(r);
  setupColors(g);
  setupColors(b);

}

// fill the color arrays with random values after the first launch
function setupColors(c) {
  for (let i = 0; i < tileCount; i++) {
    c[i] = random(0, 255);
  }
}
function draw() {
  background(220);
  noStroke();


  for (let i = 0; i < tileCount; i++) {
    push();
    translate((sin(i * frameCount) * 80), 0); //oscillates the x position of each rectangle
    fill(r[i], g[i], b[i]);
    rect(0, i * (height / tileCount), width, (height / tileCount));//x, y, width, height
    pop();
  }
}

//fills rgb arrays with random values on user input
function keyPressed() {
  if (keyCode === 82) {//82 === r
    for (let i = 0; i < tileCount; i++) {
      r[i] = random(0, 255);
    }
  }
  if (keyCode === 71) {// 71 === g
    for (let i = 0; i < tileCount; i++) {
      g[i] = random(0, 255);
    }
  }
  if (keyCode === 66) {// 66 === b
    for (let i = 0; i < tileCount; i++) {
      b[i] = random(0, 255);
    }
  }
}