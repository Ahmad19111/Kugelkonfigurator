import React from "react";
// Import  Keys-Konstanten und  Komponenten
import { Keys } from "./Keys.jsx";
import { SphereNormal } from "./SphereNormal.jsx";
import { VoronoiSphere } from "./VoronoiSphere.jsx";
import { Earth } from "./Earth1.jsx";
import { Durchmesser } from "./Durchmesser";

export const Top = (props) => {
  const { form, halter } = props; // Entpackt die 'form'- und 'halter'-Eigenschaften aus den Props
  const diameterScale = Durchmesser(props); // Berechnet den Durchmesser
  let positionY;

  // Setzt den positionY-Wert basierend auf dem 'halter'- und 'form'-Schlüssel sowie dem Durchmesser
  if (halter.key === Keys.halter.boha) {
    positionY = diameterScale + 9.5;
  } else if (halter.key === Keys.halter.hand) {
    positionY = diameterScale + 9.5;
  } else if (form.key === Keys.form.voronoi && diameterScale > 10) {
    positionY = diameterScale + 10.5;
  } else if (diameterScale < 11) {
    positionY = diameterScale + 7.8;
  } else {
    positionY = diameterScale + 9.5;
  }
  // Render
  return (
    <group castShadow position={[0, positionY, 0]}>
      {form.key === Keys.form.normal && <SphereNormal {...props} />}
      {form.key === Keys.form.voronoi && <VoronoiSphere {...props} />}
      {form.key === Keys.form.erde && <Earth {...props} />}
    </group>
  );
};
