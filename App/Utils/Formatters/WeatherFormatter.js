export default (data) => ({
  ...data,
  main: {
    ...data.main,
    temp: parseInt(data.main.temp),
    temp_min: parseInt(data.main.temp_min),
    temp_max: parseInt(data.main.temp_max)
  },
  details: {
    feels_like: parseInt(data.current.feels_like) + 'º',
    wind_speed: parseInt(data.current.wind_speed) + ' km/h',
    humidity: parseInt(data.current.humidity) + '%',
    pressure: parseInt(data.current.pressure) + ' hPa',
    visibility: parseInt((data.current.visibility / 10000) * 100) + '%',
    uvi: parseInt(data.current.uvi),
  },
  daily: data.daily.slice(1),
  hourly: data.hourly.slice(0, 6)
})