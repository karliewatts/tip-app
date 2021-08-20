import React, { useState } from 'react';

export const NumberContext = React.createContext();

const NumberProvider = props => {
  const [number, setNumber] = useState('');
  const [storedNumber, setStoredNumber] = useState('');
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
            billAmt = '0.00';
        }
        else{
            billAmt = (billAmt / 100).toFixed(2);
        }
    setBill(billAmt);
  };

    const handleSetCustomTip = event => {
    let customAmt = parseInt(event.target.value.replace(/[^\d]/, ''));
    if(!customAmt)    {
            customAmt = '0';
        }
    setCustomTip(customAmt);
  };

   const handleSetTip = event => {
    let tipAmt = event.target.value;
    setTip(tipAmt);
  };

  const handleSetPpl = event => {
    let pplAmt = parseInt(event.target.value.replace(/[^\d]/, ''));
    if(!pplAmt)    {
            pplAmt = 0;
        }
    setPpl(pplAmt);
  };

  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber('');
  };

  const handleClearValue = () => {
    setNumber('');
    setStoredNumber('');
    setBill('');
    setTip('');
    setPpl('');
  };


  const doMath = () => {
    if (number && storedNumber) {
      setStoredNumber(`${Math.round(`${(parseFloat(storedNumber) + parseFloat(number)) * 100}`) / 100}`);
      setNumber('');
    }
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
        doMath,
        handleClearValue,
        handleSetStoredValue,
        number,
        storedNumber,
        setNumber,
        activity,
        handleActivity,
      }}
    >
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;
