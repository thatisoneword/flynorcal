import React from 'react';
import { connect } from 'react-redux';

import Station from './Station';

class AllStations extends React.Component {

  renderStations = () => {
    const stationsArr = [];
    for (const stationKey in this.props.allStations) {
      stationsArr.push( <Station stationId={stationKey} key={stationKey} /> )
    }
    return stationsArr;
  }

  render() {
    return (
      <div id="stations-all" className="flex-container">
        {this.renderStations()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allStations: state.allStations
  }
}

export default connect(mapStateToProps, {})(AllStations);
