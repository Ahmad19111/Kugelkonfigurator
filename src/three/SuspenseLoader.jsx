// Import die Typography-Komponente aus der Material-UI Bibliothek
import { Typography } from "@mui/material";
// Import die Box-Komponente aus der Material-UI Bibliothek
import Box from "@mui/material/Box";
// Import den useProgress Hook aus der react-three-drei Bibliothek
import { useProgress } from "@react-three/drei";
// Import die React-Bibliothek
import React from "react";

export const SuspenseLoader = () => {
  // Holt den Fortschritt des Ladevorgangs mit dem useProgress Hook
  const { progress } = useProgress();
  const url = "assets/b-logo-oc.png";
  // Render
  return (
    <Box
      height={"100%"}
      width={"100%"}
      bgcolor={"white"}
      component={"div"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <img src={url} alt={"loading screen"} className={"loader"} />
      <br></br>
      <Typography variant="h3">{progress.toFixed(2)} %</Typography>
    </Box>
  );
};
