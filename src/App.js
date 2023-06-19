import React from 'react';
import ColorPick from './ColorPick.js';

const App = () => {
  const colors = ['violet','maroon', 'pink', 'gray','red','whitesmoke','green','blue'];

  return (
    <div>
      <h3>Color Picker</h3>
      <ColorPick colors={colors} />
    </div>
  );
};

export default App;
