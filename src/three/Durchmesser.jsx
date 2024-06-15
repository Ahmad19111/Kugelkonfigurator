import React from "react";
// Import das Keys-Objekt
import { Keys } from "./Keys.jsx";

export const Durchmesser = (props) => {
  const { Durchmesser } = props;

  let diameterValue;
  // Bestimmt den Wert des Durchmessers basierend auf dem Schlüssel
  if (Durchmesser.key === Keys.Durchmesser.fünfzigcm) {
    diameterValue = 5;
  } else if (Durchmesser.key === Keys.Durchmesser.hundertcm) {
    diameterValue = 10;
  } else if (Durchmesser.key === Keys.Durchmesser.hundertfünfzigcm) {
    diameterValue = 15;
  } else if (Durchmesser.key === Keys.Durchmesser.zweihundertcm) {
    diameterValue = 20;
  }
  // Gibt den Wert des Durchmessers zurück
  return diameterValue;
};
