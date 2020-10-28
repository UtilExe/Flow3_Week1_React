import { useState, useEffect } from 'react';


function Count(props) {
    const [countValue, setCountValue] = useState(props.startValue);
    
    function increaseValue() {
      setCountValue(countValue + props.amount);
    }
    
    function decreaseValue() {
      setCountValue(countValue - props.amount);
    }

    useEffect(
        () => {
            localStorage.setItem("count", countValue);
        }, [countValue]
    )
    
    return (
      <div>
      <p>{countValue}</p>
      <button onClick={(increaseValue)}>+</button>
      <button onClick={(decreaseValue)}>-</button>
      </div>
    );
    }
  /* Man kunne også have skrevet:
  <button onClick={() => setCountValue(countValue+1)}> </button>
  Og det samme med minus
  */

  export default Count;