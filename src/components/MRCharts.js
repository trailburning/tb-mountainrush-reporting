import React, { Component } from 'react';
import MRChart from './MRChart';

class MRCharts extends Component {
  render() {
    return (
      <div className="App-charts">
        <MRChart title="Challenges" yxis="Total" endpoint="games" urlAPI={this.props.urlAPI} campaignID={this.props.campaignID} />
        <MRChart title="Climbers" yxis="Total" endpoint="climbers" urlAPI={this.props.urlAPI} campaignID={this.props.campaignID} />
        <MRChart title="Activities" yxis="Total" endpoint="activities" urlAPI={this.props.urlAPI} campaignID={this.props.campaignID} />
        <MRChart title="Fundraising" yxis="Total £" endpoint="fundraising" urlAPI={this.props.urlAPI} campaignID={this.props.campaignID} />
      </div>
    );
  }
}

export default MRCharts;