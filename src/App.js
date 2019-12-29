import React, { useState, useEffect } from 'react';

function App() {
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  },[value])
  
  const greeting = 'Hi';
  const dom = 
    <>
      <div>
        {greeting} world!
      </div>
      <input type="text" onChange = {(e) => setValue(e.target.value)}/>
    </>;
  return (
    dom
  );
}

export default App;
