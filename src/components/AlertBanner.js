import React from 'react';
import { connect } from 'react-redux';
import './AlertBanner.css';

class AlertBanner extends React.Component {

  render() {
    return(
      <div className="alert-banner-container blue">hello banner<br /> hello<br />bye</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hello: null
  }
}

export default connect(mapStateToProps, {  })(AlertBanner);
