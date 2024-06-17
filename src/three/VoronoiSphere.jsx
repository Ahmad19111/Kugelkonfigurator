import React from 'react';
// Import den useGLTF Hook aus der react-three-drei Bibliothek
import { useGLTF } from '@react-three/drei';
// Import die Durchmesser- und SphereMaterial-Funktion
import { Durchmesser } from './Durchmesser';
import { SphereMaterial } from './SphereMaterial';

export function VoronoiSphere(props) {
  const diameterScale = Durchmesser(props); // Berechnet den Durchmesser
  // Lädt das GLTF-Modell
  const { nodes } = useGLTF('assets/3D/Voronoi/VoronoiSphere.glb');
  // Render
  return (
    <group {...props} dispose={null} scale={diameterScale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.VoronoiSphere.geometry}
        position={[0, -0.13, 0]}
        rotation={[-1.3, 5, 0]}
      >
        <SphereMaterial {...props} />
      </mesh>
    </group>
  );
}
// Preload des GLTF-Modells
useGLTF.preload('assets/3D/Voronoi/VoronoiSphere.glb');
