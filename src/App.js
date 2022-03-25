import React, {useState, useEffect} from 'react';
import Content from './Content';


function App() {
  const [cityCode, setCityCode] = useState('33028');
  const [weatherInfo, setWeatherInfo] = useState([]);
  const brojac = 0;
/*
  const fetchCity = async() => {
    const data = await fetch("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=QFjV9fwIUtp82GCkSNI4F791xKKwFM0B&q=London&language=en-en");
    const dataOfWeather = await data.json();
    setCityCode(dataOfWeather[0].Key);
  }
*/
    const fetchWeather = async() => {
      const data = await fetch('https://aerisweather1.p.rapidapi.com/observations/sarajevo,%20bih', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com',
          'X-RapidAPI-Key': '82ce00c528msh01e956e4f9737c6p1290ccjsnd1525eae9761'
        }
      });
      const dataOfWeather = await data.json();
      console.log(dataOfWeather)
      setWeatherInfo(dataOfWeather);
    }


useEffect( () => {
  fetchWeather();
},[brojac])
  
console.log(weatherInfo)
  return (
    <div className="App">
     <div className='main-window'>
       <Content weatherInfo={weatherInfo}/>
     </div>
    </div>
  );
}

export default App;
