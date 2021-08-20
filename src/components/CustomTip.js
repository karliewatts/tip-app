import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const CustomTip = () => {
    const {customTip, handleSetCustomTip } = useContext(NumberContext);

  return (
  <input type="text" className="custom-amt" placeholder="custom" maxLength="4" value={customTip} onChange={handleSetCustomTip} />
  )
};

export default CustomTip;