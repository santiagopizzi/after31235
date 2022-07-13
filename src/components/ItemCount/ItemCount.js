import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock = 5, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const suma = () => {
    if (count < stock) setCount(count + 1);
  };

  //funcion resta
  const resta = () => {
    if (count > initial) setCount(count - 1);
  };

  return (
    <div className="counter">
      <button onClick={resta} className="boton-counter">
        -
      </button>
      <h4 className="Count">
        {count}
      </h4>
      <button onClick={suma} className="boton-counter">
        +
      </button>
    </div>
  );
};

export default ItemCount;
