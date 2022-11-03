import React, { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const stateeObject = {
    total: 0,
    next: null,
    operation: null,
  };
  const [properties, setproperties] = useState(stateeObject);

  const handleClick = (item) => {
    const functionBtn = item.target.textContent;
    const newproperties = { ...properties };
    setproperties(calculate(newproperties, functionBtn));
  };

  return (

    <section className="calculator-container">
      <div className="display">{properties.next || properties.operation || properties.total || 0}</div>

      <div className="list-btn">
        <button onClick={handleClick} className="list-btn-item" type="button">AC</button>
        <button onClick={handleClick} className="list-btn-item" type="button">+/-</button>
        <button onClick={handleClick} className="list-btn-item" type="button">%</button>
        <button onClick={handleClick} className="list-btn-item operator" type="button">÷</button>
      </div>
      <div className="list-btn">
        <button onClick={handleClick} className="list-btn-item" type="button">7</button>
        <button onClick={handleClick} className="list-btn-item" type="button">8</button>
        <button onClick={handleClick} className="list-btn-item" type="button">9</button>
        <button onClick={handleClick} className="list-btn-item operator" type="button">x</button>
      </div>
      <div className="list-btn">
        <button onClick={handleClick} className="list-btn-item" type="button">4</button>
        <button onClick={handleClick} className="list-btn-item" type="button">5</button>
        <button onClick={handleClick} className="list-btn-item" type="button">6</button>
        <button onClick={handleClick} className="list-btn-item operator" type="button">-</button>
      </div>
      <div className="list-btn">
        <button onClick={handleClick} className="list-btn-item" type="button">1</button>
        <button onClick={handleClick} className="list-btn-item" type="button">2</button>
        <button onClick={handleClick} className="list-btn-item" type="button">3</button>
        <button onClick={handleClick} className="list-btn-item operator" type="button">+</button>
      </div>
      <div className="list-btn last-row">
        <button onClick={handleClick} className="list-btn-item" type="button">0</button>
        <button onClick={handleClick} className="list-btn-item" type="button">.</button>
        <button onClick={handleClick} className="list-btn-item operator" type="button">=</button>
      </div>
    </section>
  );
};

export default Calculator;
