import React, {useContext} from 'react';
import { NumberContext } from './Handles';

const TotalPerPerson = () => {
    const { bill, tip, customTip, ppl} = useContext(NumberContext);
    let tipFinal = '';
    if (tip === '') {
      tipFinal = customTip / 100;
    } else {
      tipFinal = tip;
    }

  return (
    <div className="results__item">
      <div className="results__item-label">
          <h2 className="results__title">Total</h2>
          <p className="results__subtitle">/ person</p>
      </div>
      <p className="results__amount">${bill && (tip || customTip) && ppl ? ((parseFloat(bill * tipFinal )+ parseFloat(bill)) / ppl ).toFixed(2) : "0.00"}</p>
    </div>
  )};

export default TotalPerPerson;
