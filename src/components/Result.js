import React from 'react';
import { useLocation } from 'react-router-dom';
import './Result.css';

function Result() {
  const location = useLocation();
  const { selectedMaterial, selectedConstruction } = location.state || {};

  return (
    <div className="result">
      <h1>Результаты выбора</h1>
      <div className="result-item">
        <h2>Выбранный материал:</h2>
        <p>{selectedMaterial}</p>
      </div>
      <div className="result-item">
        <h2>Выбранная конструкция:</h2>
        <p>{selectedConstruction}</p>
      </div>
    </div>
  );
}

export default Result;
