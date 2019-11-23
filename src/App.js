import React from 'react';

import './App.css';
import Brands from './pages/Brands'

const mockData = [
  { name: 'rando', id: '#1', img: 'amorelie.png' },
  { name: 'Amorelie', id: '#1', img: 'amorelie.png' },
  { name: 'Daim', id: '#2', img: 'daim.png' },
  { name: 'Cadbury', id: '#3', img: 'cadbury.png' },
  { name: 'Marabou', id: '#4', img: 'marabou.png' },
  { name: 'Under Aurmour', id: '#5', img: 'underArmour.png' },
  { name: 'm Design', id: '#6', img: 'mDesign.png' },
  { name: 'Henkel', id: '#7', img: 'henkel.png' },
]

function App() {
  return (
    <div className="App">
      <Brands mockData={mockData} />
    </div>
  );
}

export default App;
