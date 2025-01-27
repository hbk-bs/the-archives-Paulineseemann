let x, y; // Position des Kreises
let radius = 20; // Radius des Kreises (kleiner als vorher)
let speed = 4; // Geschwindigkeit des Kreises
let direction = 3; // 1 für nach rechts, -1 für nach links
let changeDirectionThreshold = 5; // Schwellenwert für die zufällige Richtungsänderung
let randomDirectionChange; // Zufällige Zahl, die die Entscheidung beeinflusst
let distanceBeforeTurn = 3; // Distanz, bevor der Kreis die Richtung ändert (vor dem Rand)

function setup() {
  createCanvas(600, 400); // Erstelle ein Canvas
  x = radius; // Startposition des Kreises auf der linken Seite
  y = height / 2; // Y-Position des Kreises in der Mitte
  noStroke(); // Entferne den Rand des Kreises
  randomDirectionChange = random(100); // Initialisiere die zufällige Zahl
}

function draw() {
  background(0,50); // Setze den Hintergrund auf schwarz

  // Bewege den Kreis nach links oder rechts basierend auf der Richtung
  x += speed * direction;

  // Wenn der Kreis sich 100px (oder weniger) vor dem Rand befindet, ändere die Richtung
  if (x > width - radius - distanceBeforeTurn || x < radius + distanceBeforeTurn || randomDirectionChange < changeDirectionThreshold) {
    direction *= -1; // Ändere die Richtung (Abrupte Richtungsänderung)
    randomDirectionChange = random(100); // Erzeuge eine neue zufällige Zahl
  }

  // Berechne die Drehung des Kreises basierend auf der Richtung
  let circleAngle = PI * direction;
  fill(255); // Setze die Farbe auf weiß
  push(); // Speichern des aktuellen Zustands
  translate(x, y); // Verschiebe den Ursprung zum Kreis
  rotate(circleAngle); // Drehe den Kreis
  ellipse(0, 0, radius * 2, radius * 2); // Zeichne den Kreis
  pop(); // Wiederherstellen des vorherigen Zustands
}
