import React from "react";
import { SpinnerDotted } from "spinners-react";

export default function Spinner() {
  return (
    <SpinnerDotted
      size={50}
      thickness={100}
      speed={100}
      color="rgba(10, 200, 50, 1)"
    />
  );
}
