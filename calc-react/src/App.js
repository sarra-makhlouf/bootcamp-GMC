import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    display: '0'
  };

  handleNumbers = e => {
    let screen = this.state.display;
    this.setState({
      display:
        screen[screen.length - 1] > -1 || e.target.innerText > -1
          ? (screen + e.target.innerText)
              .replace(/^[0÷x]/, '')
              .replace(
                /[-x+÷]0[0-9]/g,
                screen[screen.length - 2] + e.target.innerText
              )
          : (screen.slice(0, -1) + e.target.innerText).replace(/^[0÷x]/, '')
    });
  };

  result = () => {
    if (this.state.display[this.state.display.length - 1] > -1)
      this.setState({
        display: String(
          eval(this.state.display.replace(/÷/g, '/').replace(/x/g, '*'))
        )
      });
  };

  reset = () => {
    this.setState({
      display: '0'
    });
  };
  erase = () => {
    this.setState({
      display: this.state.display.slice(0, -1)
    });
  };

  render() {
    const numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
    const operators = ['÷', 'x', '-', '+'];
    const { display } = this.state;
    return (
      <div className="calc">
        <span className="display">{display}</span>
        <div className="calc-buttons">
          <div className="buttons">
            <div className="upper-buttons">
              <span className="number reset" onClick={this.reset}>
                C
              </span>
              <span className="number" onClick={this.erase}>
                &#10229;
              </span>
            </div>
            <div className="numbers">
              {numbers.map((el, i) => (
                <span className="number" key={i} onClick={this.handleNumbers}>
                  {el}
                </span>
              ))}
            </div>
          </div>
          <div className="operators">
            {operators.map((el, i) => (
              <span className="number" key={i} onClick={this.handleNumbers}>
                {el}
              </span>
            ))}
            <span className="number" onClick={this.result}>
              =
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
