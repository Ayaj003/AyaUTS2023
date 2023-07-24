import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Person from './Person';

const personsList = [
  <Person name="Aya Jabi" eyeColor="brown" age="21" key="person5" />,
  <Person name="Neveen Aqad" eyeColor="hazel" age="35" key="person6" />,
];

ReactDOM.render(
  <React.StrictMode>
    <App persons={personsList} />
  </React.StrictMode>,
  document.getElementById('root')
);
