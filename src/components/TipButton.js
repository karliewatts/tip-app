import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const TipButton = ({ buttonValue, buttonValueName }) => {
  const { handleSetTip } = useContext(NumberContext);
  return (
    <button type="button" className="btn" value={buttonValue} onChange={() => handleSetTip(buttonValue)}>
      {buttonValueName}
    </button>
  );
};

export default TipButton;