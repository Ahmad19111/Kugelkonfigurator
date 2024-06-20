import React from 'react';
// Import die Durchmesser-Funktion
import { Durchmesser } from './Durchmesser';
// Importiert die Sphere- und SphereMaterial-Komponenten aus der react-three-drei Bibliothek
import { Sphere } from '@react-three/drei';
import { SphereMaterial } from './SphereMaterial';

export function SphereNormal(props) {
  const diameterScale = Durchmesser(props); // Berechnet den Durchmesser
  // Render
  return (
    <>
      <Sphere
        args={[diameterScale, 64, 32, 6, Math.PI * 2, 0, 3.14]}
        matrixWorldAutoUpdate={undefined}
        getObjectsByProperty={undefined}
        getVertexPosition={undefined}
      >
        <SphereMaterial {...props} />
      </Sphere>
    </>
  );
}
