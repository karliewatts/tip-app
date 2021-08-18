import React from "react";
import TipAmount from "./TipAmount";
import {ReactComponent as Dollar} from '../images/icon-dollar.svg';
import NumOfPeople from "./NumOfPeople";

export default function Form(props) {
    return (
        <form className="form">
            <label className="form__label">
              Bill
              <div className="form__input">
                <Dollar />
                <input type="text" placeholder="0" value={props.bill} onChange={props.validateAndUpdateBill} />
              </div>
            </label>
            <label className="form__label">
              Select tip %
              <TipAmount
                validateAndUpdateTipPercentage={props.validateAndUpdateTipPercentage} 
                tipPercentage={props.tipPercentage}
              />
            </label>
            <NumOfPeople 
                num_of_ppl = {props.num_of_ppl}
                splitTip = {props.splitTipFunc}
            />
          </form>
    );
};