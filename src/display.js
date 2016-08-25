import React from 'react';
import css from './css/display.css';

import Performance from './performance';
import Progress from './progress';
import dispatcher from './dispatcher';

import Classnames from 'classnames';
import autobind from 'autobind-decorator';


@autobind
class DisplayStatus extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      status: {},
      sparkVals: [],
      sparkAverages: [],
      processedVals: null,
      lastVal: null
    };
    this.state = this._update( props );
  }

  componentWillMount(){
    dispatcher.register( payload => {
      if ( this.props && this.props.comm && this.props.comm.comm_id === payload.commId && payload.actionType === 'display_update' ) {
        this.setState( this._update( payload.data ) ); 
      }
    });
  }

  componentWillReceiveProps( newProps ) {
    this.setState( this._update( newProps ) ); 
  } 

  _update( props ) {
    const state =  { ...this.state };
    const { status = {} } = props;
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
          state.sparkAverages.push( this.sum( windowVals ) / windowVals.length );

          if ( state.sparkAverages.length > 30 ) {
            state.sparkAverages.shift();
          }
      
        }
      }
    }
    return state;
  }

  callbacks() {
    if ( this.props.cell ) {
      return this.props.cell.get_callbacks();
    } 
    return {};
  }
  
  toggle() {
    const { status = {} } = this.state;
    this.props.comm.send({ 
      method: 'toggle', 
      data: { 
        action: status.running ? 'stop' : 'start' } 
      }, this.callbacks() );
  }

  sum( vals ) {
    return vals.reduce( function( a, b ) {
      return a + b;
    });
  }

  render() {
    const { status = {} } = this.state;
    const running = status.running ? 'Running' : 'Stopped';
    
    const statusClass = status.running ? css.running : css.status; 
    //  'machinestat-status', {
    //    'machinestat-status-running': status.running
    //  }
    //);

    return ( 
      <div>
        <div className={ css.machinestat }>
          <h5>Timbr Machine Status</h5>
          <div className={ statusClass }>{ running }</div>
          <div className={ css.statRow }>
            <Performance { ...this.state } toggle={ this.toggle } />
            <Progress { ...this.state } />
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayStatus;
