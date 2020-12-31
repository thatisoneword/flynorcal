import React from 'react';
import { connect } from 'react-redux';
import { getHistoryStationData, setModalKey } from '../actions';
import utils from './utils';
import settings from '../variables/appSettings';

class StationHistory extends React.Component {

  stationId = this.props.stationId;
  histArray = [];
  historyDataSmall = []

  componentDidMount() {
    this.props.getHistoryStationData(this.stationId);
    // random 0 - 9 seconds added so they don't all update at once
    const updateInterval = 60000 * settings.historyDataRefreshInMinutes + (Math.floor(Math.random() * 10000))
    setInterval( () => this.props.getHistoryStationData(this.stationId), updateInterval);
  }

  renderHistoryList = () => {
    return this.historyDataSmall.map((item, index) => {
      let gust = Math.round(item.imperial.windgustAvg);
      let speed = Math.round(item.imperial.windspeedAvg);
      let rotateStyles = {transform: `rotate(${item.winddirAvg}deg)`};

      const arrow = <svg height="15" width="15" style={rotateStyles}>
        <title>From ${item.winddirAvg} degrees</title>
        <polygon points="7,0 12,15 3,15" style={{fill: "#bfbfbf"}} />
      </svg>;

      return (
        <div className="history-small-item" key={`histItem-${index}`}>
          <span className="deemphisized-text">{gust}</span><br/>{speed}<br/>{arrow}
        </div>
      );
    })
  }

  render() {
    this.histArray = this.props.stationHistory[this.stationId];
    if (!this.histArray || this.histArray.length < 2) {
      return <div id={`"${this.stationId}-history"`} className="inner-item-history">History not availble</div>;
    }

    this.historyDataSmall = [...this.histArray];

    if (this.historyDataSmall.length > 10) {
      this.historyDataSmall = this.historyDataSmall.slice(this.historyDataSmall.length-10, )
    }

    var startLable = utils.formatAMPM(this.historyDataSmall[0].obsTimeLocal);
    var endLable = utils.formatAMPM(this.historyDataSmall[this.historyDataSmall.length-1].obsTimeLocal);

    return (
      <div id={`"${this.stationId}-history"`} className="inner-item-history">
        <div className="history-small-container" key={this.stationId} onClick={() => this.props.setModalKey(this.stationId)}>
          <div className="history-small-row">
            {this.renderHistoryList()}
          </div>
          <div className="history-small-row time-range">
            <div className="deemphisized-text">{startLable} ---</div>
            <div className="deemphisized-text">--- to ---</div>
            <div className="deemphisized-text">--- {endLable}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allStations: state.allStations,
    stationHistory: state.stationHistory
  }
}

export default connect( mapStateToProps, { getHistoryStationData, setModalKey })(StationHistory);
