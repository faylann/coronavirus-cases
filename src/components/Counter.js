import React, { Component } from 'react';
import './Counter.css';
import axios from 'axios';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      confirm: '',
      recovered: '',
      deaths: ''
    };
  }

  componentDidMount() {
    axios
      .get('https://coronavirus-tracker-api.herokuapp.com/all')
      .then(response => {
        this.setState({
          confirmed: response.data.latest.confirmed,
          recovered: response.data.latest.recovered,
          deaths: response.data.latest.deaths
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <section className="counters">
          <div className="container">
            <div>
              <div className="counter">{this.state.confirmed}</div>
              <h3>Confirm</h3>
            </div>
            <div>
              <div className="counter">
                <font color="94fc13">{this.state.recovered}</font>
              </div>
              <font color="94fc13">
                <h3>Recovered</h3>
              </font>
            </div>
            <div>
              <div className="counter">
                <font color="c81912">{this.state.deaths}</font>
              </div>
              <font color="c81912">
                <h3>Deaths</h3>
              </font>
            </div>
          </div>
        </section>
      </>
    );
  }
}
