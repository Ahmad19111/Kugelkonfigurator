// Import Komponenten und Bibliotheken
import { Keys } from "./Keys.jsx";
import { BoxU } from "./Box.jsx";
import { Hands } from "./Hands.jsx";
import React from "react";

export const SphereHalter = (props) => {
  const { halter } = props; // Entpackt die 'halter'-Eigenschaft aus den Props
  // Render
  return (
    <group castShadow>
      {halter.key === Keys.halter.box && <BoxU {...props} />}
      {halter.key === Keys.halter.hand && <Hands {...props} />}
      {halter.key === Keys.halter.boha && (
        <>
          <BoxU {...props} />
          <Hands {...props} />
        </>
      )}
      {/* Rendert nichts, wenn halter.key gleich 'kein' ist */}
      {halter.key === Keys.halter.kein && <></>}
    </group>
  );
};
