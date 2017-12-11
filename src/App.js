import React, { Component } from 'react';
import './App.css';
import cc from 'cryptocompare';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      coins: [],
    };
  }

  

  componentDidMount() {
    cc.priceMulti(['BTC', 'LTC', 'IOT'], ['USD'])
      .then(res => {
        this.setState({ coins: res });
        console.log(this.state)
      })
      .catch(console.error)
  }


  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
