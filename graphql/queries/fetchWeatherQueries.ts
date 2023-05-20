import {gql} from '@apollo/client'

const fetchWeatherQuery = gql`
  query MyQuery(
    $hourly: String = "temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,rain,showers,weathercode"
    $latitude: String!
    $longitude: String!
  ) {
    openmeteo(hourly: $hourly, latitude: $latitude, longitude: $longitude) {
      elevation
      generationtime_ms
      hourly {
        apparent_temperature
        dewpoint_2m
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        temperature_2m
        time
        weathercode
      }
      hourly_units {
        apparent_temperature
        dewpoint_2m
        precipitation_probability
        rain
        relativehumidity_2m
        showers
        temperature_2m
        time
        weathercode
      }
      latitude
      longitude
      timezone
      timezone_abbreviation
      utc_offset_seconds
    }
  }
`

export default fetchWeatherQuery
