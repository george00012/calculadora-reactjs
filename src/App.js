/* eslint-disable no-eval */
import React, { useState } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (event) => {
    setValue(value + event.target.value);
  };

  const handleEqual = () => {
    try {
      setValue(eval(value));
    } catch (error) {
      setValue("Error");
    }
  };

  const handleDelete = () => {
    try {
      setValue(value.slice(0, -1));
    } catch (error) {
      setValue(eval(value));
    }
  };

  const handleClear = () => {
    setValue("");
  };

  return (
    <div className="Calculadora">
      <input
        type="text"
        value={value}
        onChange={handleInput}
        className="Calculadora-input"
        placeholder="Resultado"
      />
      <div className="Calculadora-contenido">
        <button className="Calculadora-boton-un-numero" onClick={handleDelete}>
          AD
        </button>

        <button className="Calculadora-boton-borrar" onClick={handleClear}>
          C
        </button>

        <button
          className="Calculadora-boton Calculadora-boton-punto"
          value="."
          onClick={handleClick}
        >
          .
        </button>

        <button
          className="Calculadora-boton Calculadora-boton--operador-dividir"
          value="/"
          onClick={handleClick}
        >
          /
        </button>

        <button
          className="Calculadora-boton Calculadora-boton--nr-7"
          value="7"
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="Calculadora-boton Calculadora-boton--nr-8"
          value="8"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="Calculadora-boton Calculadora-boton--nr-9"
          value="9"
          onClick={handleClick}
        >
          9
        </button>
        <button
          className="Calculadora-boton Calculadora-boton--operador-mas"
          value="+"
          onClick={handleClick}
        >
          +
        </button>
        <button
          className="Calculadora-boton Calculadora-boton--nr-4"
          value="4"
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="Calculadora-boton Calculadora-boton--nr-5"
          value="5"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="Calculadora-boton Calculadora-boton--nr-6"
          value="6"
          onClick={handleClick}
        >
          6
        </button>
        <button
          className="Calculadora-boton Calculadora-boton--operador-menos"
          value="-"
          onClick={handleClick}
        >
          -
        </button>
        <button
          className="Calculadora-boton Calculadora-boton--nr-1"
          value="1"
          onClick={handleClick}
        >
          1
        </button>
        <button
          className="Calculadora-boton Calculadora-boton--nr-2"
          value="2"
          onClick={handleClick}
        >
          2
        </button>
        <button
          className="Calculadora-boton Calculadora-boton--nr-3"
          value="3"
          onClick={handleClick}
        >
          3
        </button>

        <button
          className="Calculadora-boton Calculadora-boton--operador-multiplicar"
          value="*"
          onClick={handleClick}
        >
          *
        </button>

        <button
          className="Calculadora-boton Calculadora-boton--nr-zero"
          value="0"
          onClick={handleClick}
        >
          0
        </button>

        <button className="Calculadora-boton-igual" onClick={handleEqual}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
