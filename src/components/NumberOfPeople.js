import React, { useContext } from 'react';
import { NumberContext } from './Handles';
import {ReactComponent as Person} from '../images/icon-person.svg';

const NumberOfPeople = () => {
  const {bill, tip, customTip, ppl, handleSetPpl } = useContext(NumberContext);
  let pplClass = '';
  if (bill && (tip || customTip) && !ppl) {
    pplClass = 'is-warn';
  } else {
    pplClass = '';
  }

  return (
    <label className="form__label">
      <div className="form__ppl-labels">
        <p className="form__ppl-label">Number of People</p>
        <p className={`form__ppl-warn ${pplClass}`}>Can't be zero</p>
      </div>
      <div className={`form__input ${pplClass}`}>
          <Person />
          <input type="text" placeholder="0" maxLength="3" value={ppl} onChange={handleSetPpl} />
      </div>
    </label>
  )
};

export default NumberOfPeople;