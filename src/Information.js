import React, {useState} from 'react';
import Clock from 'react-live-clock';
import {Switch} from 'antd';
import WeatherData from './WeatherData';
function Information({weatherInfo}) {
    const [curTime, setCurTime] = useState('')
   // setCurTime(today.getHours().toLocaleString + ':' + today.getMinutes().toLocaleString);

   const today = new Date();
   const locale = 'en';
   const day = (today).toLocaleDateString(locale, {weekday: 'long'});
   const date = `${day},${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;
   return (
    <div className='first-part first'>
      <table className='first'>
        <tr>
          <th>
            <h1><Clock format={'HH:mm'} ticking={true} timezone={'UTC+2'} /></h1>
            <h4>{date}</h4>
          </th>
          <th>
            <h2>Sarajevo</h2>
            <h5>Bosnia and Hercegovina</h5>
          </th>
        </tr>
      </table>
      <WeatherData weatherInfo={weatherInfo} />
    </div>
  )
}

export default Information