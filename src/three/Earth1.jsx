import React from "react";
// Import den useGLTF Hook aus der react-three-drei Bibliothek
import { useGLTF } from "@react-three/drei";
// Import die SphereMaterial- und Durchmesser-Funktion
import { SphereMaterial } from "./SphereMaterial";
import { Durchmesser } from "./Durchmesser";

export function Earth(props) {
  // Lädt das GLTF-Modell
  const { nodes } = useGLTF("./Earth/Earth1.glb");
  const diameterScale = Durchmesser(props); // Berechnet den Durchmesser
  // Render
  return (
    <group {...props} dispose={null} scale={diameterScale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={nodes.Sphere.material}
      >
        <SphereMaterial {...props} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.map.geometry}
        material={nodes.map.material}
        position={[-0.018, 0.238, 1.147]}
        scale={3.842}
      >
        <SphereMaterial {...props} />
      </mesh>
    </group>
  );
}
// Preload des GLTF-Modells
useGLTF.preload("./Earth/Earth1.glb");
