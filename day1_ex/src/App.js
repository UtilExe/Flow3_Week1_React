import logo from './logo.svg';
import './App.css';
import upper, {text1,text2, text3} from "./file1";
import person from "./file2";
import male, {female, allPersons} from "./file2";
import Welcome, {MultiWelcome} from "./file3";
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

const {firstName, email} = person;
console.log(allPersons);
/* Using Splice to insert to specific index, task 2.5*/
allPersons.splice(2, 0, "Kurt", "Helle")
allPersons.splice(6, 0, "Tina")
console.log(allPersons);

/* Til opgave 2.6, ikke 100% optimal men den er der næsten.
Der er lidt problemer ift. udtrækning, hvor det ikke vises som på docses
Og tvivl om det er den rigtige måde at gøre det på..*/

const {lastName, gender} = person;
export const personV2 = {
  [person]: email, firstName, gender, lastName,
  phone: 123456,
  friends: {allPersons}
};
console.log(personV2)


function App() {
  return (
    <div className="App">
     <h2> Ex1</h2>
     <p>{text1}</p>
     <p>{text2}</p>
     <p>{text3}</p>
     <p>{upper("please uppercase me")}</p>
     <h2> Ex2</h2>
     <p>{firstName}</p>
     <p>{email}</p>
     <h2>Ex3</h2>
     <MultiWelcome/>
     <Example/>
    </div>
  );
}

export default App;
