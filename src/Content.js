import React from 'react';

import Information from './Information';

function Content({weatherInfo, currentCond}) {
  return (
      <div>
            <div className='firstPart'>
                <Information weatherInfo = {weatherInfo} currentCond = {currentCond}/>
            </div>
      </div>
    
  )
}

export default Content;