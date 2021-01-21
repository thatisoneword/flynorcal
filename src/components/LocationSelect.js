import React from 'react';
import { connect } from 'react-redux';
import { setFlyingSite } from '../actions';

class selectLocation extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    this.props.setFlyingSite(e.target.value);
  }

  render() {
    return(
      <div className="bar-item bar-header change-location">
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>Change Flying Site</div>
            <select value={this.props.flyingSite.name} onChange={this.handleChange}>
              <option value='musselRock'>Mussel Rock (The Dumps)</option>
              <option value='mtTam'>Mt. Tam</option>
              <option value='missionPeak'>Mission Peak</option>
              <option value='mtDiablo'>Mt. Diablo</option>
              <option value='otherSites'>Other Flying Sites</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    flyingSite: state.flyingSite
  }
}

export default connect(mapStateToProps, { setFlyingSite })(selectLocation);
