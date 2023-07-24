import React from 'react';
import Person from './Person'; 
import { Fragment } from 'react';

const App = (props) => {
  const otherPersons = [
    <Person name="Person 1" eyeColor="blue" age="23" key="person1" />,
    <Person name="Person 2" eyeColor="blue" key="person2" />,
    <Person name="Person 3" age="23" key="person3" />,
    <Person eyeColor="green" age="23" key="person4" />,
  ];

  const personsToRender = props.persons || otherPersons;

  return (
    <div>
      {personsToRender.map((person, index) => (
        <Fragment key={index}>
          {person}
          {index < personsToRender.length - 1}
          <hr />
        </Fragment>
      ))}
    </div>
  );
};

export default App;
