import React from 'react';
import { connect } from 'react-redux';
import { toggleAppClasses } from '../actions';

class MainImage extends React.Component {

  mainImgURL = 'http://www.flyfunston.org/newwebcam/panolarge.jpg'; //(3072×1450)

  zoomImage = () => {
    this.props.toggleAppClasses('main-image-zoomed')
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });;
  }

  render() {
    return(
      <div id="main-img-and-message"
        onClick={() => this.zoomImage()}
        className={!this.props.isDaytime ? 'useBackupImage' : ''}
      >
        <img id="mainImg"
              src={`${this.mainImgURL}?random=${this.props.imgCacheBuster}`}
              alt="Fort Funston" />
        <img id="backup-image" src="./images/mussel1.jpg" alt="Mussel Rock" />
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    isDaytime: state.isDaytime,
    imgCacheBuster: state.imgCacheBuster,
  }
}

export default connect( mapStateToProps, { toggleAppClasses })(MainImage);
