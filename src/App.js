import React from "react";
import NumberProvider from "./components/Handles";
import Calculator from "./components/Calculator";

import './App.scss';

const App = () => (
  <NumberProvider>
    <Calculator />
  </NumberProvider>
);

export default App;