import React from 'react';
import connect from '../connect';

@connect( 'dashboard_update' )
export default class Dashboard extends React.Component {
  render() {
    console.log('foo', this.props)
    return <div id="timbr-foo"/>;
  }
}
