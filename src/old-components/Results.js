import React from "react";

export default function Results(props) {
    return (
        <div className="results">
        <div className="resuts__items">
            <div className="results__item">
            <div className="results__item-label">
                <h2 className="results__title">Tip Amount</h2>
                <p className="results__subtitle">/ person</p>
            </div>
            <p className="results__amount">{props.tip_per_person}</p>
            </div>
            <div className="results__item">
            <div className="results__item-label">
                <h2 className="results__title">Total</h2>
                <p className="results__subtitle">/ person</p>
            </div>
            <p className="results__amount">{props.total_per_person}</p>
            </div>
            </div>
        <button className="reset-btn">reset</button>
        </div>
    );
 
};