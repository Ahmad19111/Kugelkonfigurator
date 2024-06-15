// Importiert den useTexture Hook aus der react-three-drei Bibliothek
import { useTexture } from "@react-three/drei";
// Importiert die React-Bibliothek
import React from "react";

export const SphereMaterial = (props) => {
  // Konstruiert den Dateipfad basierend auf dem Materialtyp
  const materialPath = `assets/decors/${props.material?.key}`;

  // Lädt Texturen mit dem useTexture Hook
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] =
    useTexture([
      materialPath + "/color.jpg",
      materialPath + "/displacement.jpg",
      materialPath + "/normalDX.jpg",
      materialPath + "/roughness.jpg",
      materialPath + "/metalness.jpg",
    ]);
  // Render
  return (
    <meshStandardMaterial
      displacementScale={0}
      map={colorMap}
      normalMap={normalMap}
      roughnessMap={roughnessMap}
      displacementMap={displacementMap}
      //aoMap={aoMap}
    />
  );
};
