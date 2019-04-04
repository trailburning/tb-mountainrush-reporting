import React, { Component } from 'react';
import {
  BarChart, Bar, XAxis, YAxis
} from 'recharts';

class MRChart extends Component {
  state = {
    data: null
  };

  componentWillMount() {
    this._getDataAsync(this.props.urlAPI, this.props.campaignID, this.props.endpoint);
  }

  _getDataAsync = async (urlAPI, campaignID, strEndpoint) => {
    let url = urlAPI + 'campaign/' + campaignID + '/kpi/' + strEndpoint;

    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((response) => response.json())
    .then((responseJson) => {
      this.setState({ data: responseJson });

      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render() {
    return (
      <div className="MRChart">
        <label>{this.props.title}</label>

        { this.state.data &&
        <BarChart
          width={420}
          height={260}
          data={this.state.data}
          margin={{
            top: 20, right: 20, left: 20, bottom: 20,
          }}
        >
          <XAxis dataKey="key" />
          <YAxis label={{ value: this.props.yxis, angle: -90, position: 'insideLeft' }} width={80} />
          <Bar dataKey="value" fill="#3c5b6e" />
        </BarChart>
        }
      </div>
    );
  }
}

export default MRChart;