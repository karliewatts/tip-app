import React from 'react';
import TipButton from './TipButton';
import CustomTip from './CustomTip';

const TipButtons = () => {

  return (
      <>
    <label className="form__label">
        Select tip %
        <div className="form__btns">
            <TipButton buttonValue={.05} buttonValueName={`5%`} />
            <TipButton buttonValue={.1} buttonValueName={`10%`} />
            <TipButton buttonValue={.15} buttonValueName={`15%`} />
            <TipButton buttonValue={.25} buttonValueName={`25%`} />
            <TipButton buttonValue={.5} buttonValueName={`50%`} />
            <CustomTip buttonValue={''} />
        </div>
    </label>
    </>
  )};

export default TipButtons;