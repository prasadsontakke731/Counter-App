import React from 'react';

function Card(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
      <h1>{props.cource}</h1>
    </>
  );
}

export default Card;
