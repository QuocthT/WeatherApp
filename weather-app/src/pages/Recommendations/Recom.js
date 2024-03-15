// Recom.js
import React from 'react';
import './Recom.css';

const Recom = () => {
  const recommendations = [
    'Plant crops that are suitable for the current season.',
    'Use organic fertilizers to improve soil health.',
    'Implement crop rotation to prevent soil diseases.',
    'Check weather forecasts regularly for upcoming conditions.',
  ];

  return (
    <div className="recom-container">
      <h2>Farmer Recommendations</h2>
      <ul>
        {recommendations.map((recommendation, index) => (
          <li key={index}>{recommendation}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recom;
