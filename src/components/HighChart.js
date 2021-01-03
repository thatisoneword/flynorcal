import React from 'react';
import { connect } from 'react-redux';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

class HighChart extends React.Component {

  state = { options: null };

  data = {};
  history = [];
  options = null;

  isDST = d => {
    let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
    let jul = new Date(d.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(jan, jul) !== d.getTimezoneOffset();
  }

  getTimezoneOffsetForPST = () => {
    return this.isDST(new Date()) ? 480 : 420;
  }

  componentDidMount() {
    this.data = {
      title: this.props.allStations[this.props.stationId].title,
      description: this.props.allStations[this.props.stationId].description,
      dir: [],
      gust: [],
      wind: []
    }

    this.history = this.props.stationHistory[this.props.stationId];

    this.history.forEach((item) => {
      this.data.dir.push([item.epoch*1000, item.winddirAvg]);
      this.data.gust.push([item.epoch*1000, item.imperial.windgustAvg]);
      this.data.wind.push([item.epoch*1000, item.imperial.windspeedAvg]);
    });

    this.options = {

      title: { text: this.data.title },
      subtitle: { text: this.data.description },
      time: {
        getTimezoneOffset: () => this.getTimezoneOffsetForPST()
      },
      chart: {
        margin: [40, 20, 35, 25]
      },
      xAxis: {
          type: 'datetime',
          tickInterval: 3600 * 1000,
          dateTimeLabelFormats: {
              day: ' ',
              hour: '%l %p'
          },
          gridLineWidth: 1,
          startOnTick: false,
          ordinal: false,
          crosshair: true,
      },
      yAxis: [{
          height: '60%',
          opposite: false,
          title: { text: '' },
          allowDecimals: false,
          tickInterval: 5,
          labels: {
              x: -3,
              y: 3
          },
          min: 0,
          showLastLabel: true,
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      {
          top: '65%',
          height: '35%',
          opposite: false,
          title: { text: '' },
          tickInterval: 45,
          labels: {
              formatter: function () {
                  var map = {0: "N", 90: "E", 180: "S", 270: "W", 360: "N"}
                  if (this.value in map) {
                      return map[this.value];
                  }
                  return '';
              },
              x: 14,
              y: 3
          },
          min: 0,
          max: 360,
          showLastLabel: true,
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      }],
      tooltip: {
          xDateFormat: '%m/%d/%Y %I:%M %p',
          shared: true,
          split: false,
          positioner: function() {
              return {
                  x: this.chart.plotSizeX - 90,
                  y: this.chart.plotTop - 75
              };
          },
          valueDecimals: 2,
          shadow: false,
          borderWidth: 1,
          backgroundColor: 'rgba(255,255,255,0.8)'
      },
      navigator: { enabled: false },
      scrollbar: { enabled: false },
      series: [{
          name: 'Gust',
          data: this.data.gust,
          lineWidth: 0,
          tooltip: { valueSuffix: ' mph' },
          marker: {
              enabled: true,
              radius: 2
          },
          states: { hover: { lineWidthPlus: 0 } }
      },
      {
          name: 'Speed',
          data: this.data.wind,
          type: 'spline',
          tooltip: { valueSuffix: ' mph' },
          marker: { enabled: false }
      },
      {
          name: 'Direction',
          data: this.data.dir,
          yAxis: 1,
          lineWidth: 0,
          tooltip: { valueSuffix: '°' },
          marker: {
              enabled: true,
              radius: 2
          },
          states: { hover: { lineWidthPlus: 0 } }
      }]

    } // end options {}

    // setting state and populating the options makes react update
    this.setState({options: this.options});

  }

  render() {
    return (
      <div className="chart-content-inner">
        {this.state.options ? <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={this.state.options}
        /> : 'Loading'}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stationHistory: state.stationHistory,
    allStations: state.allStations,
  }
}

export default connect(mapStateToProps, {})(HighChart);
