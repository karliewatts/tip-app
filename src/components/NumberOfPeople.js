import React, { useContext } from 'react';
import { NumberContext } from './Handles';
import {ReactComponent as Person} from '../images/icon-person.svg';

const NumberOfPeople = () => {
  const {ppl, handleSetPpl } = useContext(NumberContext);

  return (
    <label className="form__label">
      Number of People
      <p>Can't be zero</p>
      <div className="form__input">
          <Person />
          <input type="text" placeholder="0" maxLength="3" value={ppl} onChange={handleSetPpl} />
      </div>
    </label>
  )
};

export default NumberOfPeople;