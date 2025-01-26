import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ConstructionSelection.css';

function ConstructionSelection() {
  const navigate = useNavigate();

  const handleSelection = (construction) => {
    navigate('/result', { state: { selectedConstruction: construction } });
  };

  const constructions = [
    { name: 'Конструкция 1', image: '/images/construction1.png' },
    { name: 'Конструкция 2', image: '/images/construction2.png' },
    { name: 'Конструкция 3', image: '/images/construction3.png' },
    { name: 'Конструкция 4', image: '/images/construction4.png' }
  ];

  return (
    <div className="construction-selection">
      <h1>Выберите конструкцию</h1>
      <div className="constructions-container">
        {constructions.map((construction) => (
          <div key={construction.name} className="construction" onClick={() => handleSelection(construction.name)}>
            <img src={construction.image} alt={construction.name} />
            <p>{construction.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConstructionSelection;
