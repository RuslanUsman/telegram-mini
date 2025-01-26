import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MaterialSelection.css';

function MaterialSelection() {
  const navigate = useNavigate();

  const handleSelection = (material) => {
    navigate('/construction', { state: { selectedMaterial: material } });
  };

  const materials = [
    { name: 'Материал 1', image: '/images/material1.png' },
    { name: 'Материал 2', image: '/images/material2.png' },
    { name: 'Материал 3', image: '/images/material3.png' },
    { name: 'Материал 4', image: '/images/material4.png' }
  ];

  return (
    <div className="material-selection">
      <h1>Выберите материал</h1>
      <div className="materials-container">
        {materials.map((material) => (
          <div key={material.name} className="material" onClick={() => handleSelection(material.name)}>
            <img src={material.image} alt={material.name} />
            <p>{material.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MaterialSelection;
