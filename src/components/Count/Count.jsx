import "./Count.css";
import { useState } from "react";
import refreshIcon from "../../assets/refresh.svg";

// ------- opcion 1 --------
// export const Count = ({ btnText, onConfirm }) => {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount((prev) => prev + 1);
//   };

//   const decrement = () => {
//     setCount((prev) => (prev > 0 ? prev - 1 : 0));
//   };

//   const confirm = () => {
//     onConfirm(count);
//   };

export const Count = ({ btnText, stock, onConfirm, initial = 1 }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    setCount((prev) => (prev < stock ? prev + 1 : prev));
  };

  const decrement = () => {
    setCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="count-container">
      <div className="btn-count">
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      <button
        className="add-to-cart-btn"
        onClick={() => onConfirm(count)}
        disabled={count === 0}
      >
        {btnText === "refresh" ? (
          <img src={refreshIcon} alt="Actualizar" />
        ) : (
          btnText
        )}
      </button>
    </div>
  );
};
