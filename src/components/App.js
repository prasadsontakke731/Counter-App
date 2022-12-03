import React from 'react';
import Card from './Card';
import data from '../components/data';
function App() {
  return (
    <div>
      <h1>react map</h1>
      {data.map((item) => {
        return <Card name={item.name} age={item.age} cource={item.cource} />;
      })}
    </div>
  );
}

export default App;
