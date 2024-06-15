// import { Suspense, useEffect } from "react";
import React from "react";
import { Top } from "./Top.jsx";
import { SphereHalter } from "./SphereHalter.jsx";

export const SphereCom = (props) => {
  // Render
  return (
    <>
      <Top {...props} />
      <SphereHalter {...props} />
    </>
  );
};
