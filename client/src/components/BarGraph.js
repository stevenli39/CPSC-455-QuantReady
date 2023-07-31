import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const BarGraph = ({data}) => {
    // From chatgpt
  return (
    <BarChart width= {500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="questionType" />
      <YAxis dataKey="score"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="score" fill="#FF7F50" />
    </BarChart>
  );
};

export default BarGraph;
