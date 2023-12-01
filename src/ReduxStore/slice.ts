import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
interface condition {
  text:string;
}

interface CurrentClimate {
  feelslike_c: number;
  feelslike_f: number;
  humidity: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  condition:condition;
}
interface Location {
  country: string;
  lat: number;
  localtime: string;
  lon: number;
  name: string;
}
interface Forecast {
  forecastday: Array<any>;
}
// interface Forecast {
//   date:string;
//   condition : condition;
//   max_temp_c : string;
// }

interface InitialState {
  current: CurrentClimate | null;
  location: Location | null;
  forecast: Forecast | null;
}

const initialState: InitialState = {
  current: null,
  location: null,
  forecast: null,
};

export const climateSlice = createSlice({
    name: "climate",
    initialState,
    reducers: {
      setCurrent: (state, action: PayloadAction<CurrentClimate>) => {
        state.current = action.payload;
      },
      setLocation: (state, action: PayloadAction<Location>) => {
        state.location = action.payload;
      },
      setForecast: (state, action: PayloadAction<Forecast>) => {
        state.forecast = action.payload;
      },
    },
  });

export const { setCurrent, setLocation, setForecast } = climateSlice.actions;
export default climateSlice.reducer;
