

export const parseFiveDayForecast = (fiveDayForecast) => {
  let { list: forecasts, city:{name} } = fiveDayForecast;

  

  let uniqueId = Math.round(Math.random() * 100000000).toString()

  let filteredForecastDays = forecasts.filter(forecast => {
    let { dt_txt: dateString } = forecast;
    let time = dateString.split(' ')[1];

    if (time === '00:00:00') { // getting first forcast of day
      return true
    } else {
      return false
    }
  })

  let allParsedForecasts = () => {
    let parsedForecasts = {
      city: name,
      humidities: [],
      temperatures: [],
      pressures: [],
      id: uniqueId
    }

    filteredForecastDays.forEach(singleForecast => {
      let { main: { temp, pressure, humidity } } = singleForecast;

      parsedForecasts.humidities.push(humidity)
      parsedForecasts.temperatures.push(temp)
      parsedForecasts.pressures.push(pressure)
    })

    return parsedForecasts
  }

  return allParsedForecasts()
}