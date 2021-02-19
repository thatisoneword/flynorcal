import React from 'react';
import { connect } from 'react-redux';

import './AlertBanner.css';

class AlertBanner extends React.Component {


  renderBanner = () => {
    if (this.props.bannerMessages.length) {
      return <div className="alert-banner-container">{this.renderMessages()}</div>;
    } else {
      return null;
    }
  }

  closeBanner = (e, message) => {
    e.target.parentNode.parentNode.className = 'alert-banner-outer none'
  }

  renderMessages = () => {

    return this.props.bannerMessages.map((message, index) => {
      // conditional show, if no conditions show banner on all flying sites
      if ( !message.bannerVisabilityPerSite ||
           !message.bannerVisabilityPerSite.length ||
           message.bannerVisabilityPerSite.indexOf(this.props.flyingSiteName) !== -1 ) {

        return(
          <div className={` alert-banner-outer ${message.priority || 'blue'} `} key={message.title + index}>
            <div className="alert-banner-inner">
              {
                message.dismissable &&
                <span className="close close-banner" onClick={(e) => this.closeBanner(e, message)}>&times;</span>
              }
              {message.title}{message.message}
              {
                message.linkUrl && message.linkText &&
                <span> - <a href={message.linkUrl} target="_blank" rel="noreferrer">{message.linkText}</a></span>
              }
            </div>
          </div>
        );

      } else { return null; }
    })
  }

  render() {
    return (
      <>
        {this.renderBanner()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bannerMessages: state.bannerMessages,
    flyingSiteName: state.flyingSite.name
  }
}

export default connect( mapStateToProps, {  })(AlertBanner);
