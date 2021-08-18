import React from "react";

class Test extends React.Component {

  state = {
    bill: "0.00",
    service: "0.00",
    partySize: "",
    totalTip: "",
    tipPP: "",
  }

  handleBill = (event) => {
    this.setState({
      bill: event.target.value
    })
  }

  handleService = (event) => {
    this.setState({
      service: event.target.value
    })
  }

  handleParty = (event) => {
    this.setState({
      partySize: event.target.value
    })
  }

        genTip = (event) => {
        event.preventDefault();
        let tip = parseFloat(this.state.bill * this.state.service).toFixed(2);
        let totalTipPP = parseFloat(tip / this.state.partySize).toFixed(2);
        this.setState({
          totalTip: tip,
          tipPP: totalTipPP
    })
  }



  render() {
    return (
      <div>
        <h1>My Tip App</h1>
        <form onSubmit={this.genTip}>
          <label>
            Bill
            <input type="text" value={this.state.bill} onChange={this.handleBill} />
          </label>
          <label>
            Service
            <input type="text" value={this.state.service} onChange={this.handleService} />
          </label>
          <label>
            Party Size
            <input type="text" value={this.state.partySize} onChange={this.handleParty} />
          </label>

        <button text="2" clickHandler={this._number}>%</button>
        <button text="3" clickHandler={this._number}>%</button>
        <button text="1" clickHandler={this._number}>%</button>

          <input type="submit" />
        </form>
        <p>tip: ${this.state.totalTip}</p>
        <p>Per Person: ${this.state.tipPP}</p>
      </div>
    );
  }
}

export default Test;
