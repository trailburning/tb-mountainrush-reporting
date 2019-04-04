import React, { Component } from 'react';
import MRCharts from './components/MRCharts';
import './App.css';

const GAME_API_URL = 'https://tb-game-api.herokuapp.com/';
const CAMPAIGN_ID = 'yv3YWLZMVm';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <label>KPIs</label>
        <MRCharts urlAPI={GAME_API_URL} campaignID={CAMPAIGN_ID} />
      </div>
    );
  }
}

export default App;