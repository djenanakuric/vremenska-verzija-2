import React from 'react';

import Information from './Information';

function Content({weatherInfo, currentCond, nextDay}) {
  return (
      <div>
            <div className='firstPart'>
                <Information weatherInfo = {weatherInfo} currentCond = {currentCond} nextDay = {nextDay}/>
            </div>
      </div>
    
  )
}

export default Content;