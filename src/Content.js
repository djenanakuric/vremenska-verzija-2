import React from 'react';

import Information from './Information';

function Content({weatherInfo}) {
  return (
      <div>
            <div className='firstPart'>
                <Information weatherInfo = {weatherInfo}/>
            </div>
      </div>
    
  )
}

export default Content;