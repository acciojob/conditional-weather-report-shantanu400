
import React, { useState,useEffect } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherData,setWeatherData]=useState(
    {temperature: 0, conditions: "" }
  )

  useEffect(() => {
    // let pas = "931d9a0688d73e3af0451ed87dcfe233";
    // let fetc = `https://api.openweathermap.org/data/2.5/weather?q=${"patna"}&units=metric&appid=${pas}`;
    // fetch(fetc)
    //   .then((data) => {
    //     return data.json();
    //   })
    //   .then((data1) => {
    //     console.log(data1);
    //     setWeatherData([
    //       { temperature: data1.main.temp, conditions: data1.weather[0].description },
    //     ]);
    //   })
    //   .catch((error) => {
    //     alert("sorry data not found");
    //   });
     setWeatherData({temperature: 25, conditions: "Sunny" });
  }, []);

  
  return (
    <div>
      
         <WeatherDisplay weatherData={weatherData}/>
    </div>
  )
}

export default App
