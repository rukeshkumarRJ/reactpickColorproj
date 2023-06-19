import React, { useState } from 'react';
import './App.css';

const ColorPick = ({ colors }) => {
  const [showColorList, setShowColorList] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [buttonColor, setButtonColor] = useState('');

  const handleButtonClick = () => {
    setShowColorList(!showColorList);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setButtonColor(color);
    setShowColorList(false);

  };

  return (
    <div>
      <button onClick={handleButtonClick} 
          style={{ 
            border:'none',
            backgroundColor: buttonColor,
                width: '240px',
               fontSize:'18px',
                height: '30px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer',
            
       }}>
        {selectedColor ? `Selected color: ${selectedColor}` : 'Pick a color'}
      </button>
      {showColorList && (
        <div style={{ marginTop: '10px' }}>
          {colors.map((color, index) => (
            <button
              key={index}
              style={{
                border:'none',
                backgroundColor: color,
                width: '100px',
               fontSize:'18px',
                height: '40px',
                display: 'inline-block',
                margin: '5px',
                cursor: 'pointer',
                
              }}
              onClick={() => handleColorClick(color)}
             
            ><span>{color}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPick;
