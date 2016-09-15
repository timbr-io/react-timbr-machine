/* @flow */
import React from 'react';
import Step from './step';

import type { tSource, tFunctions } from '../index';

type tProps = {
  source: tSource,
  functions: tFunctions
}

export default function Steps( props: tProps ) {
  return (
    <div>
      <Step data={ props.source } />
      { props.functions.map( item => <Step data={ item } /> ) }
    </div>
  );
} 
