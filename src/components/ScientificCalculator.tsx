"use client"

import React, { useState } from 'react';

const ScientificCalculator: React.FC = () => {
  const [input, setInput] = useState<string>('0');
  const [result, setResult] = useState<number | null>(null);

  const handleInput = (value: string) => {
    setInput(input === '0' ? value : input + value);
  };

  const clearInput = () => {
    setInput('0');
    setResult(null);
  };

  const calculateResult = () => {
    try {
      setResult(eval(input)); // Use of eval for demonstration, not recommended in production code
    } catch (error) {
      setResult(null);
    }
  };

  const handleScientificOperation = (operation: string) => {
    let value = parseFloat(input);
    let output;

    switch (operation) {
      case 'sin':
        output = Math.sin((value * Math.PI) / 180);
        break;
      case 'cos':
        output = Math.cos((value * Math.PI) / 180);
        break;
      case 'tan':
        output = Math.tan((value * Math.PI) / 180);
        break;
      case 'sqrt':
        output = Math.sqrt(value);
        break;
      case 'log':
        output = Math.log10(value);
        break;
      default:
        output = value;
    }

    setInput(output.toString());
    setResult(output);
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        {result !== null && <div className="result">= {result}</div>}
      </div>
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('')}></button>
        <button onClick={() => handleInput('/')}>/</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleInput('(')}>(</button>
        <button onClick={() => handleInput(')')}>)</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleScientificOperation('sin')}>sin</button>
        <button onClick={() => handleScientificOperation('cos')}>cos</button>
        <button onClick={() => handleScientificOperation('tan')}>tan</button>
        <button onClick={() => handleScientificOperation('sqrt')}>√</button>
        <button onClick={() => handleScientificOperation('log')}>log</button>
      </div>
    </div>
  );
};

export default ScientificCalculator;