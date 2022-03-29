import React from 'react'

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