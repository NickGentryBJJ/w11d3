import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";
import { useEffect, useState } from "react";


function Thermometer() {
  const {temp, setTemp} = useClimate();
  const [desiredTemp, setDesiredTemp] = useState(temp); 


    useEffect(() => {
      const timer = setTimeout(() => {
        if (desiredTemp > temp) {
          setTemp(temp + 1);
        } else if (desiredTemp < temp){
          setTemp(temp - 1);
        }
      }, 1000);
      console.log(temp)
      // 
      return (() => clearTimeout(timer));
    },[desiredTemp, temp])
    
  
  

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={desiredTemp}
        onAfterChange={setDesiredTemp}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;