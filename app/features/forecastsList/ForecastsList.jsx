'use client';
import { useSelector } from "react-redux";
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";


export const ForecastList = () => {

  const forecastsListState = useSelector((state) => state.forecastsList.forecasts)

  const getAverage = (array) => {
    return array.reduce((a, b) => a + b) / array.length;
  }

  console.log({ forecastsListState })

  const columnHeader =
    <div className="row justify-content-md-center text-center">
      <div className="col-3">City</div>
      <div className="col-3">Temperature</div>
      <div className="col-3">Pressure</div>
      <div className="col-3">Humidity</div>
    </div>

  const forcasts = forecastsListState.map((forecast) => {

    let { humidities, pressures, temperatures } = forecast;

    return <div key={forecast.id} className="row justify-content-md-center text-center">
      <div className="col-3">{forecast.city}</div>
      <div className="col-3">
        <Sparklines data={temperatures}>
          <SparklinesLine color="#63CBDE" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        {getAverage(temperatures)}</div>
      <div className="col-3">
        <Sparklines data={pressures}>
          <SparklinesLine color="green" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        {getAverage(pressures)}</div>
      <div className="col-3">
        <Sparklines data={humidities}>
          <SparklinesLine color="#A627A4" />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        {getAverage(humidities)}</div>
    </div>
  })



  return (
    <>
      <div>{columnHeader}</div>
      <div>{forcasts}</div>
    </>
  )
}