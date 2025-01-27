let x1, x2;       // Positionen der beiden Kreise
let speed1, speed2; // Geschwindigkeiten der beiden Kreise
let acceleration = 0.05;  // Exponentielle Beschleunigung
let radius = 30;   // Radius der Kreise
let widthScreen;   // Breite des Bildschirms
let gravity = 0.5; // Schwerkraft, die den Kreis nach unten zieht
let wobbleAmount = 15;  // Amplitude der Wabbelbewegung
let wobbleSpeed = 0.1; // Geschwindigkeit der Schwingung
let wobbleFactor1 = 0;  // Wabbel-Faktor für Kreis 1
let wobbleFactor2 = 0;  // Wabbel-Faktor für Kreis 2
let wobblePhase1 = 0;   // Phasenverschiebung für Kreis 1
let wobblePhase2 = Math.PI;  // Phasenverschiebung für Kreis 2
let isColliding = false;   // Kollisionstatus
let fallSpeed1 = 0; // Fallgeschwindigkeit für Kreis 1
let fallSpeed2 = 0; // Fallgeschwindigkeit für Kreis 2
let y1, y2; // Y-Positionen der Kreise (vertikal)
let wobbleNoiseFactor1 = 0; // Zufallsfaktor für Kreis 1 (Wackeln)
let wobbleNoiseFactor2 = 0; // Zufallsfaktor für Kreis 2 (Wackeln)


function setup() {
  createCanvas(500, 500);
  widthScreen = width;
  strokeWeight(0.5); 
  
  // Initiale Positionen
  resetPositions();
  
  // Anfangsgeschwindigkeiten
  speed1 = 1;
  speed2 = -1;
}

function draw() {
  background(0,100);
  
  // Berechne die exponentielle Beschleunigung für beide Kreise
  if (!isColliding) {
    speed1 += acceleration * speed1;  // Erhöht die Geschwindigkeit von Kreis 1
    speed2 -= acceleration * abs(speed2);  // Erhöht die Geschwindigkeit von Kreis 2 (in negativer Richtung)
  }
  
  // Bewege die Kreise horizontal
  x1 += speed1;
  x2 += speed2;
  
  // Berechne die Wabbelbewegung (nur wenn Kollision stattfindet)
  if (isColliding) {
    // Verstärkter Wabbel durch zufällige Bewegung und sinusförmige Verschiebung
    wobbleFactor1 = sin(wobblePhase1) * wobbleAmount + noise(wobbleNoiseFactor1) * 10;  // Zufälliger Ruck
    wobbleFactor2 = sin(wobblePhase2) * wobbleAmount + noise(wobbleNoiseFactor2) * 10;  // Zufälliger Ruck
    
    // Update der Phasen für das Wabbeln
    wobblePhase1 += wobbleSpeed;
    wobblePhase2 += wobbleSpeed;
    
    // Zufällige Ruckbewegung
    wobbleNoiseFactor1 += 0.1; // Zufallsbewegung für Kreis 1
    wobbleNoiseFactor2 += 0.1; // Zufallsbewegung für Kreis 2
    
    // Wabbelbewegung nach der Kollision
    y1 += fallSpeed1;
    y2 += fallSpeed2;
    
    // Fallbewegung (Gravitation)
    fallSpeed1 += gravity;
    fallSpeed2 += gravity;

    // Wenn die Kreise den Boden erreichen, stoppen und zurücksetzen
    if (y1 > height - radius) {
      y1 = height - radius; // Kreis bleibt auf dem Boden
      fallSpeed1 *= -0.5; // Erzeugt einen kleinen Aufprall-Effekt
    }
    if (y2 > height - radius) {
      y2 = height - radius; // Kreis bleibt auf dem Boden
      fallSpeed2 *= -0.5; // Erzeugt einen kleinen Aufprall-Effekt
    }

    // Überprüfe, ob die Kreise zu Boden gefallen sind und beginne einen neuen Loop
    if (y1 == height - radius && y2 == height - radius) {
      // Reset der Positionen und Geschwindigkeiten
      resetPositions();
    }
  } else {
    // Bewege die Kreise vertikal ohne Wabbeln, wenn sie noch nicht kollidiert sind
    y1 = height / 2;
    y2 = height / 2;
  }
  
  // Zeichne die beiden Kreise
  fill(300);
  ellipse(x1 + wobbleFactor1, y1, radius * 2);
  
  fill(300);
  ellipse(x2 + wobbleFactor2, y2, radius * 2);
  
  // Überprüfe, ob die Kreise aufeinandertreffen
  if (x1 + radius >= x2 - radius && !isColliding) {
    // Wenn sie kollidieren, aktiviere das Wabbeln
    isColliding = true;
  }
}

// Funktion zum Zurücksetzen der Positionen der Kreise
function resetPositions() {
  // Initiale Positionen zurücksetzen
  x1 = -radius;  // Kreis 1 beginnt außerhalb des linken Randes
  x2 = width + radius;  // Kreis 2 beginnt außerhalb des rechten Randes
  y1 = height / 2; // Y-Position von Kreis 1
  y2 = height / 2; // Y-Position von Kreis 2

  // Reset der Bewegungs- und Fallgeschwindigkeiten
  speed1 = 1;
  speed2 = -1;
  fallSpeed1 = 0;
  fallSpeed2 = 0;

  // Kollision zurücksetzen
  isColliding = false;

  // Reset der Wabbelbewegungen
  wobblePhase1 = 0;
  wobblePhase2 = Math.PI;
  wobbleNoiseFactor1 = 1;
  wobbleNoiseFactor2 = 3;
}


