import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { questionType: 'QuestionTypeA', score: 10 },
  { questionType: 'QuestionTypeB', score: 20 },
  { questionType: 'QuestionTypeC', score: 15 },
];

const BarGraph = () => {
    // From chatgpt
  return (
    <BarChart width= {500} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="questionType" />
      <YAxis dataKey="score"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="score" fill="#8884d8" />
    </BarChart>
  );
};

export default BarGraph;
