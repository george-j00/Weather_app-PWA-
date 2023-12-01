import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCurrent, setForecast, setLocation } from "../ReduxStore/slice";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useDispatch();



  useEffect(() => {
    const fetchWeather = async () => {
      const options = {
        method: "GET",
        url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
        params: {
          q: searchTerm,
          days: "3",
        },
        headers: {
          "X-RapidAPI-Key":
            "3d70a687eemsh4b430604a76a40dp17650ejsn187d8b18af99",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const { current, forecast, location } = response.data;
        dispatch(setCurrent(current));
        dispatch(setForecast(forecast));
        dispatch(setLocation(location));
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeather();
  }, [searchTerm]);

  return (
    <>
     <div className="flex flex-col h-full justify-center items-center">
      <div className="flex items-center mb-4">
        <input
          type="text"
          name="placeInput"
          className="border p-2 mr-2 w-64" // Adjust the width as needed
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a location..."
        />
        <button
          className="bg-black text-white rounded-r-lg p-2"
          onClick={() => setSearchTerm(inputValue)}
        >
          Search
        </button>
      </div>

      {/* <div className="text-center">
        <p>Feels Like: {currentState?.feelslike_c}˚C</p>
        <p>Forecast: {forecastState?.forecastday[0]}</p>
        <p>Location: {locationState?.localtime}</p>
      </div> */}

    </div>
    </>
  );
};

export default Search;
