import logo from './logo.svg';
import './App.css';
import Count from './Count.js';

let startValue = 0;
let amount = 5;

function App() {

  if(localStorage.getItem("count") != null) {
    startValue = Number(localStorage.getItem("count"))
  }

  return (
    <div className="App">
    <Count startValue={startValue} amount={amount}/>
    </div>
  );
}

export default App;
