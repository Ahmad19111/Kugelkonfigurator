import React from 'react';
// Import den useGLTF Hook aus der react-three-drei Bibliothek
import { useGLTF } from '@react-three/drei';
// Import die Keys-Konstanten und die Durchmesser-Funktion aus lokalen Dateien
import { Keys } from '../Keys';
import { Durchmesser } from './Durchmesser';
// Import den useTexture Hook aus der react-three-drei Bibliothek
import { useTexture } from '@react-three/drei';

export function Hands(props) {
  const { form } = props; // Entpackt die 'form'-Eigenschaft aus den Props

  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      'assets/decors/eisen/color.jpg',
      'assets/decors/eisen/displacement.jpg',
      'assets/decors/eisen/normalDX.jpg',
      'assets/decors/eisen/roughness.jpg',
      'assets/decors/eisen/metalness.jpg',
    ]);

  const diameterScale = Durchmesser(props); // Berechnet den Durchmesser
  let positionX;
  // Setzt den positionX-Wert basierend auf dem 'form'-Schlüssel und dem Durchmesser
  if (form.key === Keys.form.voronoi && diameterScale < 10) {
    positionX = diameterScale - (diameterScale / 1.3 - 0.7);
  } else if (form.key === Keys.form.voronoi && diameterScale >= 10) {
    positionX = diameterScale - (diameterScale / 1.62 - 0.7);
  } else if (form.key === Keys.form.normal && diameterScale < 10) {
    positionX = diameterScale - (diameterScale / 1.4 - 0.7);
  } else if (form.key === Keys.form.normal && diameterScale === 10) {
    positionX = diameterScale - (diameterScale / 1.8 - 0.7);
  } else if (form.key === Keys.form.normal && diameterScale > 10) {
    positionX = diameterScale - (diameterScale / 2 - 0.7);
  } else if (form.key === Keys.form.erde && diameterScale === 10) {
    positionX = diameterScale - (diameterScale / 2.2 - 0.7);
  } else if (form.key === Keys.form.erde && diameterScale >= 10) {
    positionX = diameterScale - (diameterScale / 2.5 - 0.7);
  } else {
    positionX = diameterScale - (diameterScale / 1.55 - 0.7);
  }

  let scale;
  // Setzt den Skalierungsfaktor basierend auf dem Durchmesser
  if (diameterScale > 5) {
    scale = 15.236 + diameterScale;
  } else {
    scale = 15.236;
  }
  // Lädt das GLTF-Modell
  const { nodes, materials } = useGLTF('assets/3D//Hands/Hands.glb');
  // Render
  return (
    <group {...props} dispose={null} position={[0, 7.5, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arm.geometry}
        material={materials.None}
        material-metalness={1}
        position={[-positionX, 0.003, -0.074]}
        rotation={[-1.634, -0.6, 1.417]}
        scale={scale}
      >
        <meshStandardMaterial
          displacementScale={0}
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          aoMap={aoMap}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Arm001.geometry}
        material={materials['None.003']}
        position={[positionX, 0.003, -0.074]}
        rotation={[1.507, -0.6, 1.417]}
        scale={-scale}
      >
        <meshStandardMaterial
          displacementScale={0}
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          displacementMap={displacementMap}
          aoMap={aoMap}
        />
      </mesh>
    </group>
  );
}
// Preload des GLTF-Modells
useGLTF.preload('assets/3D//Hands/Hands.glb');
