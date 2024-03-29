import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';



const BarGraph = ({data}) => {
    // From chatgpt
  return (
    
    <BarChart width= {400} height = {250} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="questionType" />
      <YAxis dataKey="score" interval={1}/>
      <Tooltip />
      {/* <Legend /> */}
      <Bar dataKey="score" fill="#FF7F50" />
    </BarChart>
  );
};

export default BarGraph;
