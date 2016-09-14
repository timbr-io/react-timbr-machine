import React from 'react';
import autobind from 'autobind-decorator';

import dispatcher from './dispatcher';

export default function connect( action, initialState = {}, onStateUpdated = state => state ) {

  return Component => (

    class Connect extends React.Component {

      constructor( props ) {
        super( props );
        this.state = this.processState( { ...initialState, ...props } );
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

      processState( state ) {
        /* eslint-disable no-unused-vars */
        // treat state as the place to hold changing state for the module. then
        // comm and cell can be accessed separately, and preferably from inside
        // this module only.
        const { comm, cell, module, ...rest } = state;
        return onStateUpdated( rest );
      }

      @autobind
      updateState( state ) {
        this.setState( this.processState( state ) );
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
