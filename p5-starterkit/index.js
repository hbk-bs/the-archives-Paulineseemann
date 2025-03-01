

let circle1, circle2;
let repulsionStrength = 0.2;  // Stärke der Abstoßungskraft
let speed1 = createVector(2, 2);  // Geschwindigkeit von Kreis 1
let speed2 = createVector(-2, -2);  // Geschwindigkeit von Kreis 2

function setup() {
  createCanvas(600, 400);
  
  // Initialisiere die Kreise mit zufälligen Positionen
  circle1 = createVector(width / 3, height / 2);
  circle2 = createVector(2 * width / 3, height / 2);
}

function draw() {
  background(220);
  
  // Berechne den Abstand zwischen den beiden Kreisen
  let distance = dist(circle1.x, circle1.y, circle2.x, circle2.y);
  
  // Berechne die Richtung von Kreis 1 zu Kreis 2
  let direction = createVector(circle2.x - circle1.x, circle2.y - circle1.y);
  
  // Normalisiere den Richtungsvektor und multipliziere ihn mit der Abstoßungskraft
  direction.normalize();
  
  // Wenn der Abstand klein genug ist, wenden wir die Abstoßungskraft an
  if (distance < 150) {
    // Berechne den Abstoßungsvektor basierend auf dem Abstand und der Abstoßungskraft
    let force = direction.mult(repulsionStrength * (1 / distance));
    
    // Wende die Abstoßungskraft auf die Geschwindigkeiten beider Kreise an
    speed1.add(force);
    speed2.sub(force);
  }
  
  // Bewege die Kreise basierend auf ihrer Geschwindigkeit
  circle1.add(speed1);
  circle2.add(speed2);
  
  // Zeichne die Kreise
  fill(255, 0, 0);
  ellipse(circle1.x, circle1.y, 40, 40);
  
  fill(0, 0, 255);
  ellipse(circle2.x, circle2.y, 40, 40);
  
  // Verhindere, dass die Kreise den Rand des Canvas verlassen
  if (circle1.x > width - 20 || circle1.x < 20) {
    speed1.x *= -1;
  }
  
  if (circle1.y > height - 20 || circle1.y < 20) {
    speed1.y *= -1;
  }
  
  if (circle2.x > width - 20 || circle2.x < 20) {
    speed2.x *= -1;
  }
  
  if (circle2.y > height - 20 || circle2.y < 20) {
    speed2.y *= -1;
  }
}
