import React from 'react';
// Import den useTexture Hook aus der react-three-drei Bibliothek
import { useTexture } from '@react-three/drei';
// Import die Durchmesser-Funktion aus einer lokalen Datei
import { Durchmesser } from './Durchmesser';

export function BoxU(props) {
  // Lädt Texturen mit dem useTexture Hook
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      'assets/decors/metalbox/color.png',
      'assets/decors/metalbox/displacement.png',
      'assets/decors/metalbox/normalDX.png',
      'assets/decors/metalbox/roughness.png',
      'assets/decors/metalbox/metalness.png',
    ]);
  // Berechnet den Skalenwert basierend auf dem Durchmesser
  const diameterScale = Durchmesser(props);

  let scale;
  // Setzt den Skalierungsfaktor basierend auf dem berechneten Durchmesser
  if (diameterScale > 10) {
    scale = [30, 9.5, 30];
  } else {
    scale = [15, 5.5, 15];
  }
  let scaleBig;

  if (diameterScale > 10) {
    scaleBig = [35, 8, 35];
  } else {
    scaleBig = [20, 8, 20];
  }
  // Render
  return (
    <>
      <mesh scale={scaleBig} position={[0, 0.1, 0]} castShadow>
        <boxGeometry />
        <meshStandardMaterial
          displacementScale={0}
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          aoMap={aoMap}
        />
      </mesh>
      <mesh scale={scale} position={[0, 5, 0]}>
        <boxGeometry />
        <meshStandardMaterial
          displacementScale={0}
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          aoMap={aoMap}
        />
      </mesh>
    </>
  );
}
