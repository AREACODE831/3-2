let array = [];
let backgroundColor = 100;
let noiseOffset = 0.0;
let strokeWidth = 9;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(41, 242, 242);

  //noFill();
}

function draw() {
  //==false = !mouseIsPressed
  background(41, 242, 242, 5);
  strokeWeight(strokeWidth);

  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;


  // if (mouseIsPressed) {
    //line(mouseX, mouseY, pmouseX, pmouseY);
    // backgroundColor -= 2;
    // background(backgroundColor);
    stroke(map(mouseX, 0, 600, 0, 255, true))
    array.push([mouseX, mouseY]);
    //grey scale random
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }


function keyTyped() {
  //  console.log('key ${key} is being typed')
  console.log("key" + key + "is being typed")


  if (key === 's') {
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    clear();

    // beginShape();
    // for (let i = 0; i < array.length; i++) {
    //   //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    //   curveVertex(array[i][0], array[i][1]);
    // }
    //endShape();
  }

  return false;

}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}
