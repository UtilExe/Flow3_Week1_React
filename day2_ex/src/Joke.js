import { useState, useEffect } from 'react';

function Joke() {
const url = 'https://api.chucknorris.io/jokes/random';
const [joke, setJoke] = useState('');
const dadUrl = 'https://icanhazdadjoke.com';
const [dadJoke, setDadJoke] = useState('');

function getJoke() {
    fetch(url, { headers: { 'Accept': 'application/json' } })
        .then(res => res.json())
        .then(data => {
            setJoke(data.value)
        })
}

function getDadJoke() {
    fetch(dadUrl, { headers: { 'Accept': 'application/json' } })
        .then(res => res.json())
        .then(data => {
            setDadJoke(data.joke)
        })
    }

useEffect(
    () => {
        const interval = setInterval(() => {
            getDadJoke()
        }, 10000)
        return ()=> {
            clearInterval(interval)
        }
    }, []
)

return (
    <div>
        <button onClick={getJoke}> Get ChuckNorris</button>
        <p>{joke}</p>
        <p>{dadJoke}</p>
    
    </div>
)
}

export default Joke