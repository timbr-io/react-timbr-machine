import React from 'react';
import autobind from 'autobind-decorator';

import dispatcher from './dispatcher';

export default function connect( action, initialState = {}, onStateUpdated = state => state ) {

  return Component => (

    class Connect extends React.Component {

      constructor( props ) {
        /* eslint-disable no-unused-vars */
        super( props );
        const { comm, cell, module, ...rest } = props;
        this.state = onStateUpdated( { ...initialState, ...rest } );
      }

      componentWillMount() {
        dispatcher.register( payload => {
          console.log('payload', payload)
          if ( this.props && this.props.comm && this.props.comm.comm_id === payload.commId && payload.actionType === action ) {
            console.log('updating')
            this.updateState( payload.data );
          }
        });
      }

      componentWillReceiveProps( newProps ) {
        this.updateState( newProps );
      }

      @autobind
      updateState( state ) {
        this.setState( onStateUpdated( state ) );
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
}
