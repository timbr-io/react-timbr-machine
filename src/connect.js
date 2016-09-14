import React from 'react';
import autobind from 'autobind-decorator';

import dispatcher from './dispatcher';

export default function connect( action, initialState = {}, onStateUpdated = state => state ) {

  return Component => (

    class Connect extends React.Component {

      constructor( props ) {
        super( props );
        this.state = onStateUpdated( initialState );
      }

      componentWillMount() {
        dispatcher.register( payload => {
          if ( this.props && this.props.comm && this.props.comm.comm_id === payload.commId && payload.actionType === action ) {
            this.updateState( payload.data );
          }
        });
      }

      componentWillReceiveProps( newProps ) {
        this.updateState( newProps );
      }

      @autobind
      send( data ) {
        this.props.comm.send( data, () =>
          this.props.cell
            ? this.props.cell.get_callbacks()
            : {}
        );
      }

      render() {
        return (
          <Component
            state       = { this.state }
            send        = { this.send }
          />
        );
      }
    }
    
  );
