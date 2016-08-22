import React from 'react';

function sum( vals ) {
  return vals.reduce( function( a, b ) {
    return a + b;
  });
}

function Progress( props ) {

  const { status, processedPercent, processedVals, sparkAverages } = props;

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
    <div className="machinestat-metastats">
      <div className="machinestat-progress">
        <div className="machinestat-progress-key machinestat-label">
          <ul>
            <li className="key-queued">Queued</li>
            <li className="key-processed">Processed</li>
            <li className="key-average">Average</li>
          </ul>
        </div>
        <div className="machinestat-progress-graph">
          <div className="machinestat-progress-processed" style={{ width: `${processedPercent}%` }}></div>
          <div className="machinestat-progress-average" style={{ left: `${errAvg}%` }}></div>
          <div className="machinestat-progress-label-processed">{ status.processed }</div>
          <div className="machinestat-progress-label-queued">{ status.queue_size }</div>
        </div>
        <div className="machinestat-movedown">
          { status.errored > 0 && errPercent ? <span>Errored: { status.errored } <span className="machinestat-meta">({ errPercent }%)</span></span> : ''}
          &nbsp;
          { status.processed && timeLeft ? <span className="machinestat-indent">Est. Completion: { timeLeft } seconds</span> : ''}
        </div>
      </div>
    </div>
  );
};

export default Progress;
