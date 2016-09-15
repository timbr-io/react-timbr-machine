/* @flow */
import React from 'react';
import connect from '../connect';
import Steps from './steps';
import './index.css';

export type tSource = [ string, { name: string } ];
export type tFunctions = Array<[ string, { name: string } ]>;

type tConfig = {
  functions: ?tFunctions,
  init:      ?string,
  source:    ?tSource
};

type tState = {
  config: tConfig
};

const initialState: tState = {
  config: {
    functions: null,
    init:      null,
    source:    null
  }
};

@connect( 'dashboard_update', initialState )
export default class Dashboard extends React.Component {

  props: {
    state: tState,
    send: ( data: Object ) => void
  }

  render() {
    const { source, functions } = this.props.state.config;
    return (
      <div>
        <Steps
          source    = { source }
          functions = { functions }
        />
      </div>
    );
  }
}
