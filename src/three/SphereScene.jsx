// Import von wichtigen Bibliotheken und Komponenten
import { CanvasWithScreenshotting } from '@k3/core';
import {
  Bounds,
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
} from '@react-three/drei';
import { Suspense } from 'react';
import { SuspenseLoader } from './SuspenseLoader';
import { Sphere } from './Sphere.jsx';
import { Plane } from './Plane.jsx';
import React from 'react';

//SphereScene-Komponente
export function SphereScene() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <CanvasWithScreenshotting
        canvasProps={{
          shadows: true,
          camera: { position: [10, 10, 10], fov: 40 },
        }}
      >
        <Bounds fit clip observe damping={10} margin={1.2}>
          <Sphere />
        </Bounds>

        <ContactShadows
          position={[0, -0.95, 0]}
          opacity={0.75}
          scale={100}
          blur={2.5}
          far={4}
          // Dreis types are weird
          matrixWorldAutoUpdate={undefined}
          getObjectsByProperty={undefined}
        />
        <Sky distance={450000} sunPosition={[0, 1, 0]} />
        <Environment files="https://oc-k3.s3.eu-central-1.amazonaws.com/libs/3d/environments/apartment.hdr" />
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2} />
        <Plane />
      </CanvasWithScreenshotting>
    </Suspense>
  );
}
