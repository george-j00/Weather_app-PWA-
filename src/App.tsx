// import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { RootState } from "./ReduxStore/store";
import Block from "./components/Block";
import Search from "./components/Search";
import { PiThermometerColdThin } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import BgVideo from "./components/BgVideo";
import Forcast from "./components/Forcast";

function App() {
  const currentState = useSelector((state: RootState) => state.climate.current);

  const forcastState = useSelector(
    (state: RootState) => state.climate.forecast
  );

  const temp =
    currentState?.temp_c !== undefined ? currentState.temp_c + "˚C" : "0˚C";
  const humidity =
    currentState?.humidity !== undefined ? currentState.humidity + "%" : "0%";
  const temp_f =
    currentState?.temp_f !== undefined ? currentState.temp_f + "˚F" : "0˚F";
  return (
    <>
      <div className="relative h-screen">
        <div className="absolute z-20 top-[120px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          <p className="font-extrabold text-5xl text-white">
            <span className="text-black">{currentState?.condition.text}</span>{" "}
            <span className="">Today </span>
          </p>
        </div>
        <BgVideo />
        <div className="flex flex-col items-center justify-center h-full">
          <div className="bg-white bg-opacity-25 p-8 mt-12 rounded-lg z-10">
            <Search />
          </div>
          <div className="flex gap-5 z-10">
            <Block Icon={<PiThermometerColdThin />} data={temp} />
            <Block Icon={<WiHumidity />} data={humidity} />
            <Block data={temp_f} />
          </div>

          <div className="flex flex-col  z-10">
            <h1 className="flex justify-center font-bold text-3xl mb-5 text-white">Forecast</h1>
            <div className="flex flex-row gap-5">
              {forcastState &&
                forcastState.forecastday.map((element, index) => (
                  <Forcast key={index} data={element} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
