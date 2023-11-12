import React, { useState } from 'react';

const App = () => {
  const [number, setNumber] = useState(2);
  const [result, setResult] = useState(0);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNumber(value);
  };

  const handleCalculate = () => {
    setResult(number * number); // 버그: 2를 고정값으로 사용하고 있음
  };

  return (
    <div>
      <h1>구</h1>
      <input type="number" value={number} onChange={handleInputChange} />
      <button onClick={handleCalculate}>계산</button>
      <p>{`${number} * 2 = ${result}`}</p>
    </div>
  );
};

export default App;
