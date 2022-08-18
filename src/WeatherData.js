/* import React from 'react'

function WeatherData( {weatherInfo}) {
  return (
    <nav class="navbar">
          <div class="navbar-nav">
            <a class="nav-link active" href="#">Today</a>
            <a class="nav-link" href="#">Next days</a>
          </div>
</nav>
  )
}

export default WeatherData;

*/
import Today from './Today';
import { Route, Routes } from 'react-router-dom';
import {useState} from 'react'
import NextDays from './NextDays';


function WeatherData( {weatherInfo, currentCond, nextDay}) {
  const [day, setDay] = useState('today');
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
  }
  return (
    <nav className="navbar">
          <div className="navbar-nav">
          <h2 style={{textAlign: 'left', marginLeft: '5%', fontSize: '55px'}}>{currentCond[0].Temperature.Metric.Value} °C</h2>
            <a className="nav-link active" href="/today" onSubmit={handleSubmit} onClick={() => setDay('today')}>Today</a>
            <a className="nav-link" href="/nextDays" onClick={(e) => {e.preventDefault(); setDay('nextDay')}}>Next days</a>
          </div> 
          <div>
            {day === 'nextDay' ? <NextDays nextDay={nextDay} /> : <Today weatherInfo={weatherInfo} />}
          </div>
    </nav>
  )
}

export default WeatherData;
