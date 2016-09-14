import React from 'react';
import css from './css/display.css';

import Performance from './performance';
import Progress from './progress';
import dispatcher from './dispatcher';
import autobind from 'autobind-decorator';

const initialState = {
  status: {},
  sparkVals: [],
  sparkAverages: [],
  processedVals: null,
  lastVal: null
};

function onStateUpdated( state ) {
  const state =  { ...state };
  const { status = {} } = state;
  state.status = status;

  if ( typeof status.processed !== 'undefined' ) {
    const totalQueued = status.processed + status.queue_size;
    state.processedPercent = ( status.processed / totalQueued ) * 100;

    if ( !state.processedVals ) {
      state.processedVals = Array(10).fill( state.processedPercent );
    } else {
      state.processedVals.push( state.processedPercent );
    }

    if ( !state.lastVal ) {
      state.lastVal = status.processed;
    } else {
      state.sparkVals.push( status.processed - state.lastVal );
      state.lastVal = status.processed;

      if ( state.sparkVals.length > 1 ) {
        const windowSeconds = 10;
        const windowVals = state.sparkVals.slice(Math.max( state.sparkVals.length - windowSeconds, 1))
        state.sparkAverages.push( sum( windowVals ) / windowVals.length );

        if ( state.sparkAverages.length > 30 ) {
          state.sparkAverages.shift();
        }

      }
    }
  }
  return state;
}

function sum( vals ) {
  return vals.reduce( ( a, b ) => a + b );
}

@connect( 'display_update', initialState, onStateUpdated )
class DisplayStatus extends React.Component {

  @autobind
  toggle() {
    const { status = {} } = this.props.state;
    this.props.send({
      method: 'toggle',
      data: { action: status.running ? 'stop' : 'start' }
    });
  }

  render() {
    const { status = {} } = this.props.state;
    const running = status.running ? 'Running' : 'Stopped';

    const statusClass = status.running ? css.running : css.status;

    return (
      <div>
        <div className={ css.machinestat }>
          <h5>Timbr Machine Status</h5>
          <div className={ statusClass }>{ running }</div>
          <div className={ css.statRow }>
            <Performance { ...this.props } toggle={ this.toggle } />
            <Progress { ...this.props } />
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayStatus;
