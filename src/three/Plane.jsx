// Importdie MeshReflectorMaterial-Komponente aus der react-three-drei Bibliothek
import { MeshReflectorMaterial } from "@react-three/drei";

export function Plane() {
  // Render
  return (
    <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
      <planeGeometry args={[100, 100]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1080}
        mixBlur={1}
        mixStrength={10}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#726c6c"
        metalness={0.1}
      />
    </mesh>
  );
}
