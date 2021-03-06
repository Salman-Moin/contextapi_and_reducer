import React, { useState } from "react";
import Parent from "./Parent";
import CounterContext from "./CounterContext";

function App() {
  let countState = useState(1);
  //let [count, setCount] = useState(25);

  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
