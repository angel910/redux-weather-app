'use client';
import { useDispatch, useSelector } from "react-redux";
import { fetchFiveDayForecast } from "./forecastsListSlice";

export const ForecastList = () => {
  const dispatch = useDispatch()

  const forecastsListState = useSelector((state) => state.forecastsList.forecasts)

  const columnHeader =
    <div className="row justify-content-md-center text-center">
      <div className="col-3">City</div>
      <div className="col-3">Temperature</div>
      <div className="col-3">Pressure</div>
      <div className="col-3">Humidity</div>
    </div>

  const forcasts = forecastsListState.map((forecast) => {
    let mainForecastData = forecast.main

    return <div key={forecast.id} className="row justify-content-md-center text-center">
      <div className="col-3">{forecast.name}</div>
      <div className="col-3">{mainForecastData.temp}</div>
      <div className="col-3">{mainForecastData.pressure}</div>
      <div className="col-3">{mainForecastData.humidity}</div>
    </div>
  })



  return (
    <>
      <div>{columnHeader}</div>
      <div>{forcasts}</div>
    </>
  )
}