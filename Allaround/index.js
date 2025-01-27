let circles = [];  // Array für mehrere Kreise
let numCircles = 100;  // Anzahl der Kreise
let radius = 10;  // Radius der Kreise

function setup() {
  createCanvas(600, 400);
  
  // Erstelle mehrere Kreise mit zufälligen Positionen und Geschwindigkeiten
  for (let i = 0; i < numCircles; i++) {
    let circle = {
      position: createVector(random(width), random(height)),
      speed: createVector(random(-2, 2), random(-2, 2)),
    };
    circles.push(circle);
  }
}

function draw() {
  background(0, 4);  // Schwarzer Hintergrund

  // Bewege und zeichne jeden Kreis
  for (let circle of circles) {
    // Bewege den Kreis
    circle.position.add(circle.speed);

    // Wenn der Kreis den Rand erreicht, drehe die Richtung um
    if (circle.position.x > width - radius || circle.position.x < radius) {
      circle.speed.x *= -1;
    }
    if (circle.position.y > height - radius || circle.position.y < radius) {
      circle.speed.y *= -1;
    }

    // Zeichne den Kreis
    fill(255);
    noStroke();
    ellipse(circle.position.x, circle.position.y, radius * 2, radius * 2);
  }
}






