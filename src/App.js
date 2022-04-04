import React, {useState, useEffect} from 'react';
import Content from './Content';


function App() {
  //const [cityCode, setCityCode] = useState('33028');
  //const [weatherInfo, setWeatherInfo] = useState('');
  const brojac = 0;
  
/*
  const fetchCity = async() => {
    const data = await fetch("http://dataservice.accuweather.com/locations/v1/cities/search?apikey=QFjV9fwIUtp82GCkSNI4F791xKKwFM0B&q=London&language=en-en");
    const dataOfWeather = await data.json();
    setCityCode(dataOfWeather[0].Key);
  }

    //const fetchWeather = async() => {
      //const data = await fetch("http://dataservice.accuweather.com/currentconditions/v1/33028?apikey=%09QFjV9fwIUtp82GCkSNI4F791xKKwFM0B&language=en-us&details=true");
      //const dataOfWeather = await data.json();
      //console.log(dataOfWeather)
     // setWeatherInfo(dataOfWeather);
    }
useEffect( () => {
  fetchWeather();
}, [cityCode])
 */
const currentCond = [
  {
    "LocalObservationDateTime": "2022-04-01T13:47:00+02:00",
    "EpochTime": 1648813620,
    "WeatherText": "Light rain",
    "WeatherIcon": 12,
    "HasPrecipitation": true,
    "PrecipitationType": "Rain",
    "IsDayTime": true,
    "Temperature": {
      "Metric": {
        "Value": 10.8,
        "Unit": "C",
        "UnitType": 17
      },
      "Imperial": {
        "Value": 51,
        "Unit": "F",
        "UnitType": 18
      }
    }
  }
]
const weatherInfo = [
  {
    "Headline": {
      "EffectiveDate": "2022-03-31T14:00:00+02:00",
      "EffectiveEpochDate": 1648728000,
      "Severity": 2,
      "Text": "Rain and a thunderstorm from Thursday afternoon to late Thursday night can lead to flooding",
      "Category": "rain",
      "EndDate": "2022-04-01T08:00:00+02:00",
      "EndEpochDate": 1648792800,
      "MobileLink": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?unit=c&lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2022-03-31T07:00:00+02:00",
        "EpochDate": 1648702800,
        "Sun": {
          "Rise": "2022-03-31T06:31:00+02:00",
          "EpochRise": 1648701060,
          "Set": "2022-03-31T19:11:00+02:00",
          "EpochSet": 1648746660
        },
        "Moon": {
          "Rise": "2022-03-31T06:29:00+02:00",
          "EpochRise": 1648700940,
          "Set": "2022-03-31T18:21:00+02:00",
          "EpochSet": 1648743660,
          "Phase": "WaningCrescent",
          "Age": 29
        },
        "Temperature": {
          "Minimum": {
            "Value": 10,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 15.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "RealFeelTemperature": {
          "Minimum": {
            "Value": 8.7,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 13,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Cool"
          }
        },
        "RealFeelTemperatureShade": {
          "Minimum": {
            "Value": 8.7,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Chilly"
          },
          "Maximum": {
            "Value": 12.2,
            "Unit": "C",
            "UnitType": 17,
            "Phrase": "Cool"
          }
        },
        "HoursOfSun": 0.8,
        "DegreeDaySummary": {
          "Heating": {
            "Value": 5,
            "Unit": "C",
            "UnitType": 17
          },
          "Cooling": {
            "Value": 0,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "AirAndPollen": [
          {
            "Name": "AirQuality",
            "Value": 0,
            "Category": "Good",
            "CategoryValue": 1,
            "Type": "Ozone"
          },
          {
            "Name": "Grass",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Mold",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Ragweed",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "Tree",
            "Value": 0,
            "Category": "Low",
            "CategoryValue": 1
          },
          {
            "Name": "UVIndex",
            "Value": 2,
            "Category": "Low",
            "CategoryValue": 1
          }
        ],
        "Day": {
          "Icon": 18,
          "IconPhrase": "Rain",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy",
          "ShortPhrase": "Heavy rain and a thunderstorm",
          "LongPhrase": "Heavy rain and a thunderstorm; there is a risk for major flooding",
          "PrecipitationProbability": 99,
          "ThunderstormProbability": 30,
          "RainProbability": 99,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 16.7,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 184,
              "Localized": "S",
              "English": "S"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 50,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 137,
              "Localized": "SE",
              "English": "SE"
            }
          },
          "TotalLiquid": {
            "Value": 27.8,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 27.8,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 10,
          "HoursOfRain": 10,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 99,
          "Evapotranspiration": {
            "Value": 1.3,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 3263.2,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Night": {
          "Icon": 18,
          "IconPhrase": "Rain",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Heavy",
          "ShortPhrase": "Heavy rain",
          "LongPhrase": "Heavy rain; there is a risk for major flooding",
          "PrecipitationProbability": 99,
          "ThunderstormProbability": 6,
          "RainProbability": 99,
          "SnowProbability": 0,
          "IceProbability": 0,
          "Wind": {
            "Speed": {
              "Value": 9.3,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 176,
              "Localized": "S",
              "English": "S"
            }
          },
          "WindGust": {
            "Speed": {
              "Value": 25.9,
              "Unit": "km/h",
              "UnitType": 7
            },
            "Direction": {
              "Degrees": 152,
              "Localized": "SSE",
              "English": "SSE"
            }
          },
          "TotalLiquid": {
            "Value": 20.3,
            "Unit": "mm",
            "UnitType": 3
          },
          "Rain": {
            "Value": 20.3,
            "Unit": "mm",
            "UnitType": 3
          },
          "Snow": {
            "Value": 0,
            "Unit": "cm",
            "UnitType": 4
          },
          "Ice": {
            "Value": 0,
            "Unit": "mm",
            "UnitType": 3
          },
          "HoursOfPrecipitation": 10,
          "HoursOfRain": 10,
          "HoursOfSnow": 0,
          "HoursOfIce": 0,
          "CloudCover": 99,
          "Evapotranspiration": {
            "Value": 0.3,
            "Unit": "mm",
            "UnitType": 3
          },
          "SolarIrradiance": {
            "Value": 134.1,
            "Unit": "W/m²",
            "UnitType": 33
          }
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?day=1&unit=c&lang=en-us"
      }
    ]
  }
];

const nextDay = [
  {
    "Headline": {
      "EffectiveDate": "2022-04-02T20:00:00+02:00",
      "EffectiveEpochDate": 1648922400,
      "Severity": 3,
      "Text": "Mixed rain and snow Saturday night",
      "Category": "snow/rain",
      "EndDate": "2022-04-03T08:00:00+02:00",
      "EndEpochDate": 1648965600,
      "MobileLink": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?unit=c&lang=en-us",
      "Link": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?unit=c&lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2022-04-01T07:00:00+02:00",
        "EpochDate": 1648789200,
        "Temperature": {
          "Minimum": {
            "Value": 4.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 13.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 18,
          "IconPhrase": "Rain",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?day=1&unit=c&lang=en-us"
      },
      {
        "Date": "2022-04-02T07:00:00+02:00",
        "EpochDate": 1648875600,
        "Temperature": {
          "Minimum": {
            "Value": -0.2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 11.4,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 29,
          "IconPhrase": "Rain and snow",
          "HasPrecipitation": true,
          "PrecipitationType": "Mixed",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2022-04-03T07:00:00+02:00",
        "EpochDate": 1648962000,
        "Temperature": {
          "Minimum": {
            "Value": -2,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 8.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2022-04-04T07:00:00+02:00",
        "EpochDate": 1649048400,
        "Temperature": {
          "Minimum": {
            "Value": -0.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 11.8,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Night": {
          "Icon": 38,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/ba/sarajevo/33028/daily-weather-forecast/33028?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2022-04-05T07:00:00+02:00",
        "EpochDate": 1649134800,
        "Temperature": {
          "Minimum": {
            "Value": -1.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 14.7,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 6,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
      }
    ]
  }
]
console.log(weatherInfo)
console.log(currentCond)
console.log(nextDay)
  return (
    <div className="App">
     <div className='main-window'>
       <Content weatherInfo={weatherInfo} currentCond={currentCond} nextDay = {nextDay}/>
     </div>
    </div>
  );
}

export default App;
