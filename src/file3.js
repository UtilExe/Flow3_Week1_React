import React from 'react';
import ReactDOM from 'react-dom';
//import persons from "./file2";
import {persons} from "./file2";


export function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        {persons.map((person) => <li key={person.firstName}><WelcomePerson person={person} /> </li>)}
        <WelcomePerson person={persons[2]}/>
      </div>
    );
  }

  export function WelcomePerson(props) {
   // const {firstName, lastName, email} = props.person;
    const {firstName, lastName, email} = props.person;
    return <p>
      {firstName}, {lastName}, {email}</p>;
  }

  
