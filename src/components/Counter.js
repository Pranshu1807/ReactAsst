import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState("Counter");
  const [resetValue, setresetValue] = useState("");
  const [resetName, setresetName] = useState("");
  return (
    <div>
      <div className="counter">
        <div className="counterName">{name}</div>
        <div className="value">{value}</div>
        <div className="add-subtract">
          <button
            onClick={(e) => {
              setValue(value - 1);
            }}
          >
            -
          </button>
          <button
            onClick={(e) => {
              setValue(value + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="Reset">
          <button
            onClick={(e) => {
              setValue(0);
            }}
          >
            Reset Counter
          </button>
        </div>
        <div className="Start">
          <input
            type="text"
            value={resetValue}
            onChange={(e) => {
              setresetValue(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setValue(parseInt(resetValue));
              setresetValue("");
            }}
          >
            Start Value
          </button>
        </div>
        <div className="Name">
          <input
            type="text"
            value={resetName}
            onChange={(e) => {
              setresetName(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              setName(resetName);
              setresetName("");
            }}
          >
            Counter Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
