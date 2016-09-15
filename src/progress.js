import React from 'react';
import css from './css/progress.css';

function sum( vals ) {
  return vals.reduce( ( a, b ) => a + b );
}

function Progress( { state } ) {

  const { status, processedPercent, processedVals, sparkAverages } = state;

  let errAvg = 0;
  let errPercent;
  let timeLeft;

  if ( typeof status.processed !== 'undefined' ) {
    errAvg = sum( processedVals ) / processedVals.length;
    errPercent = ( Math.round(( status.errored / status.processed ) * 10 ) / 10 ) * 100 || null;
    if ( sparkAverages.length > 1 ) {
      timeLeft = Math.ceil( ( status.queue_size /  ( sum( sparkAverages ) / sparkAverages.length ) ) );
    }
  }

  return (
    <div className={ css.root }>
      <div className={ css.progress }>
        <div className={ css.key }>
          <ul>
            <li className={ css.keyQueued }>Queued</li>
            <li className={ css.keyProcessed }>Processed</li>
            <li className={ css.keyAverage }>Average</li>
          </ul>
        </div>
        <div className={ css.graph }>
          <div className={ css.processed } style={{ width: `${processedPercent}%` }}></div>
          <div className={ css.average } style={{ left: `${errAvg}%` }}></div>
          <div className={ css.labelProcessed }>{ status.processed }</div>
          <div className={ css.labelQueued }>{ status.queue_size }</div>
        </div>
        <div className={ css.movedown }>
          { status.errored > 0 && errPercent ? <span>Errored: { status.errored } <span className={ css.meta }>({ errPercent }%)</span></span> : ''}
          &nbsp;
          { status.processed && timeLeft ? <span className={ css.indent }>Est. Completion: { timeLeft } seconds</span> : ''}
        </div>
      </div>
    </div>
  );
}

export default Progress;
