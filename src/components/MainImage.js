import React from 'react';
import { connect } from 'react-redux';
import { toggleAppClasses } from '../actions';
import './MainImage.css';

class MainImage extends React.Component {

  useMainImage = null;

  renderMainImg = () => {
    if (this.useMainImage) {
      return (
        <a
          href={`${this.props.flyingSite.mainImgUrl}?random=${this.props.imgCacheBuster}`}
          target="_blank"
          rel="noreferrer"
        >
          <img id="mainImg"
          className={this.props.flyingSite.name}
          src={`${this.props.flyingSite.mainImgUrl}?random=${this.props.imgCacheBuster}`}
          alt="Fort Funston" />
        </a>
      );
    } else {
      return (
        <img id="backup-image"
          className={this.props.flyingSite.name}
          src={this.props.flyingSite.backupImg}
          alt="Mussel Rock" />
        );
    }
  }

  render() {
    this.useMainImage = this.props.isDaytime && !!(this.props.flyingSite.mainImgUrl);
    return(
      <div id="main-img-and-message" >
        { this.renderMainImg() }
      </div>
    );
  };
}

const mapStateToProps = (state) => {
  return {
    isDaytime: state.isDaytime,
    imgCacheBuster: state.imgCacheBuster,
    flyingSite: state.flyingSite
  }
}

export default connect( mapStateToProps, { toggleAppClasses })(MainImage);
