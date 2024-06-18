import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { openWeatherApi } from "@/OpenWeatherAPI";
import axios from "axios";

const rootUrl = openWeatherApi.rootUrl

export const fetchSingleDayForcast = createAsyncThunk('data/fetchSingleDayForcast', async (locationId) => {
  const response = await axios.get(`${rootUrl}/weather?q=${locationId},us&units=imperial&appid=${openWeatherApi.key}`);
  console.log(response.data)
  return response.data;
})

export const fetchFiveDayForecast = createAsyncThunk('data/fetchFiveDayForecast', async (longitude, latitude) => {
  const response = await axios.get(`${rootUrl}/forecast?lat=${latitude}&lon=${longitude}&units=imperial&appid=${openWeatherApi.key}`)
  console.log(response.data)
  return response.data
})

const initialState = {
  forecasts: [],
  status: 'idle', // to track loading state
  error: null,
}

export const forecastsListSlice = createSlice({
  name: "forecasts",
  initialState,
  reducers: {
    addToForecastsList: (state) => {
      state.list.shift(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleDayForcast.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSingleDayForcast.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.forecasts.unshift(action.payload)
      })
      .addCase(fetchSingleDayForcast.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    builder
      .addCase(fetchFiveDayForecast.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFiveDayForecast.fulfilled, (state, action) => {
        state.status = 'succeeded';
      })
      .addCase(fetchFiveDayForecast.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
})

export const { } = forecastsListSlice.actions;

export default forecastsListSlice.reducer;