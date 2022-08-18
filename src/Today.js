import React from 'react'

function Today({weatherInfo}) {
  return (
    <div>
        <table className='today-info'>
        <tbody>
          <tr>
            <td>
              <img className='today-img' src={`https://www.accuweather.com/images/weathericons/${weatherInfo[0].DailyForecasts[0].Day.Icon}.svg`} alt=""/>
              <p>{weatherInfo[0].DailyForecasts[0].Day.LongPhrase}</p>
            </td>
            <td>
              <h1 style={{fontSize: '220%', marginLeft: '-15%'}}>{weatherInfo[0].DailyForecasts[0].Temperature.Minimum.Value}/{weatherInfo[0].DailyForecasts[0].Temperature.Maximum.Value}°C</h1>
              
            </td>
            <td style={{width: '20%'}}>
            <img className='humidity-icon' src={"humidity(2).png"} alt='' width='12%' height='5%'/>
              <h3 className='humidity-icon'>Probability of rain: </h3>
              <h2>{weatherInfo[0].DailyForecasts[0].Day.RainProbability} %</h2>
            </td>
            <td style={{width: '30%'}}>
              <img className='wind-icon' src={"wind(1).png"} alt='' width='12%' height='3%' style={{marginLeft: '-25%'}}/>
              <h3 className='wind-icon'>Wind</h3>
              <h2>{weatherInfo[0].DailyForecasts[0].Day.Wind.Speed.Value} km/h</h2>
            </td>
            
          </tr>
        </tbody>
      </table>    
    </div>
  )
}

export default Today;