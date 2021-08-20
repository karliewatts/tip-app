import React from "react";

const TipAmount = (props) => {
    return (
        <div className="form__btns">
            <input type="button" className="btn" value="5%" onClick={props.validateAndUpdateTipPercentage} /> 
            <input type="button" className="btn" value="10%" onClick={props.validateAndUpdateTipPercentage} />
            <input type="button" className="btn" value="15%" onClick={props.validateAndUpdateTipPercentage} />
            <input type="button" className="btn" value="25%" onClick={props.validateAndUpdateTipPercentage} />
            <input type="button" className="btn" value="50%" onClick={props.validateAndUpdateTipPercentage} />
            <input type="text" className="custom-amt" placeholder="custom" value={props.value}
                onChange={props.validateAndUpdateTipPercentage}
                onFocus={props.validateAndUpdateTipPercentage} />
        </div>
    );
};

export default TipAmount;
