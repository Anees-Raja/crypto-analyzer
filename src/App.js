import React, { Component } from 'react';
import './App.css';
import cc from 'cryptocompare';
var NumberFormat = require('react-number-format');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      coins: [],
      listOfCoins: []
    };

  }
  componentDidMount() {
    
    cc.coinList()
      .then(res => {
        var listOfCoins = res.Data;
        console.log(listOfCoins);
        this.setState({
          listOfCoins: listOfCoins
        });
      })
      .catch(console.error)

    cc.priceMulti(['BTC', 'LTC', 'IOT'], ['USD'])
      .then(res => {
        const coins = res;
        this.setState({ coins: coins });
        console.log(res)
      })
      .catch(console.error)

    }

  render() {
    return (
      <div className="App">
        {Object.keys(this.state.coins).map(key => (
          <div id="coin-container">
            <span className="left">{key}</span>
            <span className="right">
            <NumberFormat 
            value={this.state.coins[key].USD} 
            displayType={'text'}
            prefix={'$'}
            decimal={2}
            thousandSeparator={true} /></span>
          </div>

        ))}
      </div>
    );
  }
}

export default App;