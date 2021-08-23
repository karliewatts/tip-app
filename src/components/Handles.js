import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [bill, setBill] = useState('');
  const [tip, setTip] = useState('');
  const [customTip, setCustomTip] = useState('');
  const [ppl, setPpl] = useState('');
  const [activity, setActivity] = useState('');

  const handleActivity = () => {
    setActivity(activity === "" ? "is-active" : "");
  }

  const handleSetBill = event => {
    let billAmt = parseInt(event.target.value.replace(/[^\d]/, ''));
    if(!billAmt)    {
      billAmt = '0';
    }
    else {
      billAmt = (billAmt / 100).toFixed(2);
    }
    setBill(billAmt);
  };

  const handleSetCustomTip = event => {
    let customAmt = parseInt(event.target.value.replace(/[^\d]/, ''));
    if(!customAmt) {
      customAmt = '';
    }
    setCustomTip(customAmt);
  };

  const handleSetTip = event => {
    setTip(event.target.value);
    setActivity(activity === "" ? "is-active" : "");
  };

  const handleSetPpl = event => {
    let pplAmt = parseInt(event.target.value.replace(/[^\d]/, ''));
    if(!pplAmt) {
      pplAmt = '';
    }
    setPpl(pplAmt);
  };

  const handleClearValue = () => {
    setBill('');
    setTip('');
    setPpl('');
    setCustomTip('');
  };

  return (
    <NumberContext.Provider
      value={{
        bill,
        handleSetBill,
        customTip,
        handleSetCustomTip,
        tip,
        handleSetTip,
        ppl,
        handleSetPpl,
        handleClearValue,
        activity,
        handleActivity,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
