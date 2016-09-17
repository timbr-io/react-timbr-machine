/* @flow */
import React from 'react';
import connect from '../connect';
import Snapshots from './snapshots';
import Steps from './steps';

import '../css/fonts.css';

export type tSource = [ string, { name: string } ];
export type tFunctions = Array<[ string, { name: string } ]>;

type tConfig = {
  functions: tFunctions,
  init:      string,
  source:    tSource
};

type tState = {
  config: tConfig
};

@connect( 'dashboard_update' )
export default class Dashboard extends React.Component {

  props: {
    state: tState,
    send: ( data: Object ) => void
  }

  render() {
    const {
      state: {
        config: { source, functions } = {}
      } = {}
    } = this.props;

    return (
      <div>
        <Steps
          send = { this.props.send }
          source = { source }
          functions = { functions }
        />
        <Snapshots
          send = { this.props.send }
        />
      </div>
    );
  }
}
