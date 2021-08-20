import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ResetButton = () => {
  const { handleClearValue } = useContext(NumberContext);
  return (
    <button type="button" className="reset-btn" onClick={() => handleClearValue()}>
      reset
    </button>
  );
};

export default ResetButton;
