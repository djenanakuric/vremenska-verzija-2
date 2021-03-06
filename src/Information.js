import React, {useState} from 'react';
import Clock from 'react-live-clock';
import {Switch} from 'antd';
import WeatherData from './WeatherData';
function Information({weatherInfo, currentCond, nextDay}) {
   const today = new Date();
   console.log(today);
   const day = (today).toLocaleDateString('en', {weekday: 'long'});
   const date = `${day}, ${today.getDate()} ${today.toLocaleDateString('en', {month: 'long' })}\n\n`;
   return (
    <div className='first-part first'>
      <table className='first'>
        <tbody>
         <tr>
          <td>
            <h1><Clock format={'HH:mm'} ticking={true} timezone={'UTC'} /></h1>
            <h4>{date}</h4>
            
          </td>
          <td>
            <h2>Sarajevo</h2>
            <h5>Bosnia and Hercegovina</h5>
          </td>
        </tr> 
        </tbody>  
      </table>
      <WeatherData weatherInfo={weatherInfo} currentCond = {currentCond} nextDay = {nextDay} />
    </div>
  )
}

export default Information