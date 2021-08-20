import React from 'react';
import Bill from './Bill';
import NumberOfPeople from './NumberOfPeople';
import TipPerPerson from './TipPerPerson';
import TotalPerPerson from './TotalPerPerson';
import ResetButton from './ResetButton';
import TipButtons from './TipButtons';
import {ReactComponent as Logo} from '../images/logo.svg';

const Calculator = () => (
    <div className="container">
        <div className="container__logo">
          <Logo />
        </div>
        <div className="calculator">
            <div className="form">
                <Bill />
                <TipButtons />
                <NumberOfPeople />
            </div>
            <div className="results">
                <div className="results__grid">
                    <TipPerPerson />
                    <TotalPerPerson />
                </div>
                <ResetButton />
            </div>
        </div>
    </div>
);

export default Calculator;
