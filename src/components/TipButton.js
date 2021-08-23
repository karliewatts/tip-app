import React, { useContext } from 'react';
import { NumberContext } from './Handles';

const TipButton = ({ buttonValue, buttonValueName, i }) => {
  const { activity, handleSetTip } = useContext(NumberContext);
  return (
    <button type="button" className={`btn ${activity}`} value={buttonValue} onClick={handleSetTip}>
      {buttonValueName}
    </button>
  );
};

export default TipButton;