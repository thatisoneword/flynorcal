import React from 'react';
import { connect } from 'react-redux';
import { toggleAppClasses} from '../actions';
import LocationSelect from './LocationSelect';
import SidebarMusselRock from './SidebarMusselRock';
import SidebarMtTam from './SidebarMtTam';

class Sidebar extends React.Component {

  showLocationSelect = true;

  getLocationSpcificSidebarComponent = () => {
    switch (this.props.flyingSite.name) {
    case 'mtTam':
       return <SidebarMtTam />;
    default:
      return <SidebarMusselRock />
    }
  }

  render() {
    return (
      <div className="sidebar bar-block card animate-right" id="rightMenu">

        <button onClick={() => this.props.toggleAppClasses('show-menu')} className="bar-item format-button close-button close">&times;</button>

        { this.showLocationSelect && <LocationSelect /> }

        { this.getLocationSpcificSidebarComponent() }

        <div className="bar-item bar-header top-space">This Website</div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdKOzls3V1ONWfs_pRnacV0f7MAlaS0wPgEaW9lHfu9HMOnew/viewform" className="bar-item format-button" target="_blank" rel="noreferrer">Help And Feedback</a>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    flyingSite: state.flyingSite
  }
}

export default connect(mapStateToProps, { toggleAppClasses })(Sidebar);
