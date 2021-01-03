import React from 'react';
import { connect } from 'react-redux';
import { setFlyingSite } from '../actions';

class selectLocation extends React.Component {

  // state = { value: 'grapefruit' }

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log('the select value is', this.state.value);
  }

  handleChange = (e) => {
    //this.setState({value: e.target.value});
    console.log('the select value issss', e.target.value);
    this.props.setFlyingSite(e.target.value);
  }

  render() {
    return(
      <div className="bar-item bar-header top-space change-location">
        <form onSubmit={this.handleSubmit}>
          <label>
            <div>Change Flying Site</div>
            <select value={this.props.flyingSite} onChange={this.handleChange}>
              <option value="musselRock">Mussel Rock (The Dumps)</option>
              <option value="mtTam">Mt. Tam</option>
              <option value="missionPeak">Mission Peak</option>
              <option value="MtDiablo">Mt. Diablo</option>
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
