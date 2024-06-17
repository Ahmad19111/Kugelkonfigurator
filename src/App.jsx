// Import die React-Bibliothek, K3Main, SphereScene Komponente
import React from 'react';
import { K3Main } from '@k3/core';
import { SphereScene } from './three/SphereScene';

// Erweiterungen die K3 Anwendung
const extensions = {
  app: {
    k3d: {
      root: () => () => <SphereScene />,
    },
  },
};

// Definiert die Haupt-App-Komponente
export const App = () => {
  return <K3Main extensions={extensions} />;
};
