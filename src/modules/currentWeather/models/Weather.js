import {dateTransform} from "@/helpers"

class Weather {
  constructor (weather = {
    weather: [{}],
    main: {}
  }) {
    this.keyDesc = {
      title: weather.weather[0].main || ''
    }
    this.wordDesc = {
      title: weather.weather[0].description || '',
    }
    this.temp = {
      title: weather.main.temp || '',
      unit: 'C'
    }
    this.humidity = {
      title: weather.main.humidity || '',
      unit: '%'
    }
    this.pressure = {
      title: weather.main.pressure || '',
      unit: 'Па'
    }
    this.date = dateTransform(new Date(1000 * weather.dt || 0))
  }
}

export default Weather
