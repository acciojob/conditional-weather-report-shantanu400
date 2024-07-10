import React from "react";

export default function WeatherDisplay(props){
    const {temperature,conditions} = props.weatherData;
    const style = {
        color: temperature >= 20 ? 'red' : 'blue', 
        height: '100px', 
        width: '60px', 
        display: 'inline'
    };
    return (
        <div style={style}>
        <p>
            <span>Temperature: {temperature}
                </span>
                
            <span>   {conditions}
            </span>
       </p>
        
    </div>
    )
}