import React, { useState, useEffect } from "react";
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Example({ param }) {
  const fitDatos = (datos) => {
    return Object.keys(param).map((key) => {
      return {
        name: key,
        cantidad: param[key],
      };
    });
  };
  const [desperdicios, setDesperdicios] = useState(fitDatos(param));

  useEffect(() => {
    setDesperdicios(fitDatos(param));
  }, [param]);

  return (
    <ResponsiveContainer width="100%" height="50%">
      <ComposedChart
        width={500}
        height={400}
        data={desperdicios}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="cantidad" barSize={20} fill="#449342" />
        <Line type="monotone" dataKey="cantidad" stroke="#3FD0C9" />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
