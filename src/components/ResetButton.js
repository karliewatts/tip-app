import React, { useContext } from 'react';
import { NumberContext } from './Handles';

const ResetButton = () => {
  const { bill, tip, ppl, handleClearValue } = useContext(NumberContext);
  let resetReady = '';
  if (bill || tip || ppl) {
    resetReady = 'is-ready';
  }
  
  return (
    <button type="button" className={`reset-btn ${resetReady}`} onClick={() => handleClearValue()}>
      reset
    </button>
  );
};

export default ResetButton;
