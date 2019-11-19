import React, { Component } from 'react';class Address extends Component {
    render () {
      return (
        <div>
          <img src={this.props.imgUrl} />
          <h4>{this.props.streetLineOne}</h4>
          <h4>{this.props.streetLineTwo}</h4>
          <h4>{this.props.state}</h4>
          <h4>{this.props.zip}</h4>
        </div>
      );
    }
  }Address.defaultProps = {
    imgUrl: '/images/icons/map_marker.svg',
    streetLineOne: '1234 This Way Street',
    streetLineTwo: 'Apt. 1',
    state: 'CA',
    zip: 94703,
  }
  export default Address;