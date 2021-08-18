import React from "react";
import {ReactComponent as Person} from '../images/icon-person.svg';

export default function NumOfPeople(props) {
    return (
        <label className="form__label">
            Number of People
            <div className="form__input">
                <Person />
                <input type="text" placeholder="0" value={props.num_of_ppl} onChange={props.splitTip}/>
            </div>
        </label>
    );
 
};