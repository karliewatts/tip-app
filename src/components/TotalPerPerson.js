import React, {useContext} from 'react';
import { NumberContext } from './NumberProvider';

const TotalPerPerson = () => {
    const { number, storedNumber} = useContext(NumberContext);
  return (
    <div className="results__item">
      <div className="results__item-label">
          <h2 className="results__title">Total</h2>
          <p className="results__subtitle">/ person</p>
      </div>
      <p className="results__amount">{!number.length && !storedNumber ? '$0.00' : number || storedNumber}</p>
    </div>
  )};

export default TotalPerPerson;
