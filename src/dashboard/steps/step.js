/* @flow */
import React from 'react';
import css from './step.css';

type tProps = {
  data: [ string, { name: string } ],
  send: ( data: Object ) => void
};

export default function Step( props: tProps ) {
  const [ , attrs ] = props.data;

  function toggleCapture() {
    props.send({
      method: 'capture',
      data: { action: 'start' }
    });
  }

  return (
    <div className={ css.root }>
      <div className={ css.label }>{ attrs.name }</div>
      <div className={ css.buttons }>
        <a onClick={ toggleCapture }>
          <i className={ css.captureButton } title="Start Capturing"></i>
        </a>
      </div>
    </div>
  );
} 

