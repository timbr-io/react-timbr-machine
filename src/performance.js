import React from 'react';
import css from './css/performance.css'
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';

function Performance( props ) {

  const { toggle, sparkAverages, status } = props;

  const sparkMax = Math.ceil( Math.max.apply(null, sparkAverages) ) || 0;
  const sparkMin = Math.round( Math.min.apply(null, sparkAverages) ) || 0;
  const sparkAvg = Math.round( sparkAverages[ sparkAverages.length - 1 ] * 10 ) / 10 || 0; 

  const action = status.running ? 'Stop' : 'Start';

  return (
    <div className={ css.performance }>
      <div className={ css.label }>Average per minute</div>
      <div className={ css.table }>
        <div className={ css.tight }>
          <div className={ css.performanceHigh }>{ sparkMax }</div>
          <div className={ css.performanceLow }>{ sparkMin }</div>
        </div>
        <div className={ css.padded }>
          <div className={ css.sparkline }>
            <Sparklines data={sparkAverages} limit={30} width={175} height={25} margin={5}>
              <SparklinesLine color="#98c000" style={{ strokeWidth: 1, stroke: "#98c000", fill: "none" }} />
              <SparklinesSpots style={{ fill: "#98c000" }} />
            </Sparklines>
          </div>
        </div>
        <div className={ css.tightMiddle }><small>{ sparkAvg }</small></div>
      </div>

      <div className={ css.movedown }>
        <a href="#" className={ `${css.btn} btn btn-primary` } onClick={ toggle }>{ action }</a>
      </div>
    </div>
  );
};

export default Performance;
