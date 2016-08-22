import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

function Performance( props ) {

  const { toggle, sparkAverages, status } = props;

  const sparkMax = Math.ceil( Math.max.apply(null, sparkAverages) );
  const sparkMin = Math.round( Math.min.apply(null, sparkAverages) );
  const sparkAvg = Math.round( sparkAverages[ sparkAverages.length - 1 ] * 10 ) / 10; 

  const action = status.running ? 'Stop' : 'Start';

  return (
    <div className="machinestat-performance">
      <div className="machinestat-label">Average per minute</div>
      <div className="machinestat-table">
        <div className="machinestat-cell machinestat-cell-tight">
          <div className="machinestat-performance-high">{ sparkMax }</div>
          <div className="machinestat-performance-low">{ sparkMin }</div>
        </div>
        <div className="machinestat-cell machinestat-cell-padded">
          <div className="machinestat-sparkline">
            <Sparklines data={sparkAverages} limit={30} width={175} height={25} margin={5}>
              <SparklinesLine color="#98c000" style={{ strokeWidth: 1, stroke: "#98c000", fill: "none" }} />
              <SparklinesSpots style={{ fill: "#98c000" }} />
            </Sparklines>
          </div>
        </div>
        <div className="machinestat-cell machinestat-cell-tight machinestat-cell-middle"><small>{ sparkAvg }</small></div>
      </div>

      <div className="machinestat-movedown">
        <a href="#" className='btn btn-primary' onClick={ toggle }>{ action }</a>
      </div>
    </div>
  );
};

export default Performance;
