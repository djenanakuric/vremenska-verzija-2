import React from 'react'

function NextDays({nextDay}) {
 
  const dayInWeek = (n) => {
    const today = new Date();
    today.setDate(today.getDate() + n);
    return today.toLocaleDateString('en', {weekday:'short'});
  }
  return (
    <div>
        <table className='next-day-table'>
          <tbody>
            <tr>
              <td>
                <h3>{dayInWeek(1)}</h3>
              <img className='next-img' src={`https://www.accuweather.com/images/weathericons/${nextDay[0].DailyForecasts[0].Day.Icon}.svg`} alt=""/>
              <h3>{nextDay[0].DailyForecasts[0].Day.IconPhrase}</h3>
              </td>
              <td>
              <h3>{dayInWeek(2)}</h3>
              <img className='next-img' src={`https://www.accuweather.com/images/weathericons/${nextDay[0].DailyForecasts[1].Day.Icon}.svg`} alt=""/>
              <h3>{nextDay[0].DailyForecasts[1].Day.IconPhrase}</h3>
              </td>
              <td>
              <h3>{dayInWeek(3)}</h3>
              <img className='next-img' src={`https://www.accuweather.com/images/weathericons/${nextDay[0].DailyForecasts[2].Day.Icon}.svg`} style={{colorAdjust: 'white'}} alt=""/>
              <h3>{nextDay[0].DailyForecasts[2].Day.IconPhrase}</h3>
              </td>
              <td>
              <h3>{dayInWeek(4)}</h3>
              <img className='next-img' src={`https://www.accuweather.com/images/weathericons/${nextDay[0].DailyForecasts[3].Day.Icon}.svg`} alt=""/>
              <h3>{nextDay[0].DailyForecasts[3].Day.IconPhrase}</h3>
              </td>
              <td>
              <h3>{dayInWeek(5)}</h3>
              <img className='next-img' src={`https://www.accuweather.com/images/weathericons/${nextDay[0].DailyForecasts[4].Day.Icon}.svg`} alt=""/>
              <h3>{nextDay[0].DailyForecasts[4].Day.IconPhrase}</h3>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}

export default NextDays;