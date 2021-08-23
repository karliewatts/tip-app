import React, { useContext } from 'react';
import { NumberContext } from './Handles';
import {ReactComponent as Dollar} from '../images/icon-dollar.svg';

const Bill = () => {
  const {bill, handleSetBill } = useContext(NumberContext);

  return (
  <label className="form__label">
    Bill
    <div className="form__input">
      <Dollar />
      <input type="text" placeholder="0" value={bill} onChange={handleSetBill} />
    </div>
  </label>
  )
};

export default Bill;