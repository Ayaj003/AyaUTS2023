import React from 'react';

const Person = ({ name = 'Zeyad', eyeColor = 'deepblue', age = 35 }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Eye Color: {eyeColor}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default Person;
