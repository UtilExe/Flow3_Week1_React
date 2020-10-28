import logo from './logo.svg';
import './App.css';
import Count from './Count.js';
import Joke from './Joke.js';

let startValue = 0;
let amount = 5;

function App() {

  if(localStorage.getItem("count") != null) {
    startValue = Number(localStorage.getItem("count"))
  }

  return (
    <div className="App">
    <Count startValue={startValue} amount={amount}/>
    <Joke/>
    </div>
  );
}

export default App;