let circle1X, circle1Y;  // Position des ersten Kreises
let circle2X, circle2Y;  // Position des zweiten Kreises
let speed = 2;            // Geschwindigkeit der Kreise
let radius = 20;          // Radius der Kreise

function setup() {
  createCanvas(700, 400);  // Erstelle das Canvas
  noStroke();              // Entferne die Randlinien der Kreise

  // Setze die Position der Kreise so, dass sie sich zu Beginn berühren
  circle1X = width / 2 - radius;  // Der erste Kreis links von der Mitte
  circle1Y = height / 2;          // Der erste Kreis in der Mitte

  circle2X = width / 2 + radius;  // Der zweite Kreis rechts von der Mitte
  circle2Y = height / 2;          // Der zweite Kreis ebenfalls in der Mitte
}

function draw() {
  background(0,50);  // Hintergrund schwarz

  // Bewege die Kreise voneinander weg
  circle1X -= speed;  // Der erste Kreis bewegt sich nach links
  circle1Y += speed / 2;  // Der erste Kreis bewegt sich auch etwas nach unten

  circle2X += speed;  // Der zweite Kreis bewegt sich nach rechts
  circle2Y -= speed / 2;  // Der zweite Kreis bewegt sich auch etwas nach oben

  // Überprüfe, ob die Kreise den Rand des Canvas überschreiten und setze sie zurück
  if (circle1X < 0 || circle1X > width || circle1Y < 0 || circle1Y > height) {
    circle1X = width / 2 - radius;  // Setze den ersten Kreis zurück
    circle1Y = height / 2;
  }

  if (circle2X < 0 || circle2X > width || circle2Y < 0 || circle2Y > height) {
    circle2X = width / 2 + radius;  // Setze den zweiten Kreis zurück
    circle2Y = height / 2;
  }

  // Zeichne die beiden Kreise
  fill(255);  // Weiß
  ellipse(circle1X, circle1Y, radius * 2, radius * 2);
  ellipse(circle2X, circle2Y, radius * 2, radius * 2);
}
