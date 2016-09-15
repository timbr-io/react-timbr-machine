/* @flow */
import React from 'react';
import Step from './step';

import type { tSource, tFunctions } from '../index';

type tProps = {
  send: ( data: Object ) => void,
  source: tSource,
  functions: tFunctions
}

export default function Steps( props: tProps ) {
  return (
    <div>
      <Step data={ props.source } send={ props.send } />
      { props.functions.map( item => <Step data={ item } send={ props.send } /> ) }
    </div>
  );
} 
