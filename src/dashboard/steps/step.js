/* @flow */
import React from 'react';
import css from './step.css';

type tProps = {
  data: [ string, { name: string } ]
};

export default function Step( props: tProps ) {
  const [ , attrs ] = props.data;
  return (
    <div className={ css.lockedStep }>
      <div className={ css.label }>{ attrs.name }</div>
      <div className={ css.actions }>
        <a>
          <i className={ css.captureButton } title="Start Capturing"></i>
        </a>
      </div>
    </div>
  );
} 

