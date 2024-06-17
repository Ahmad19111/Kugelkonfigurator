// Import Hooks aus dem K3-Framework, Bibliotheken und Komponente
import {
  useSelectedNumberByVariableKey,
  useSelectedValueByVariableKey,
} from '@k3/core';
import React from 'react';
import { SphereCom } from './SphereCom.jsx';

export const Sphere = () => {
  // Verwendet Hooks, um Werte aus dem Zustand abzurufen
  const form = useSelectedValueByVariableKey('sphereform');
  const halter = useSelectedValueByVariableKey('holder');
  const material = useSelectedValueByVariableKey('mat');
  const raduis = useSelectedNumberByVariableKey('rad');
  const Dmesser = useSelectedValueByVariableKey('mass');

  // Wenn notwendige Werte nicht vorhanden sind, wird nichts gerendert
  if (!form || !halter || !material || !Dmesser) {
    return <></>;
  }
  // Rendert die SphereCom-Komponente innerhalb einer Gruppe
  return (
    <group name="k3d" key="k3d">
      <SphereCom
        form={form}
        halter={halter}
        material={material}
        raduis={(raduis / 100) * 2}
        Durchmesser={Dmesser}
      />
    </group>
  );
};
