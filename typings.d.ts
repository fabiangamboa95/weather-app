interface Hourly {
  apparent_temperature: number[]
  dewpoint_2m: number[]
  precipitation_probability: number[]
  rain: number[]
  relativehumidity_2m: number[]
  showers: number[]
  temperature_2m: number[]
  time: string[]
  weathercode: number[]
}

interface HourlyUnits {
  apparent_temperature: string
  dewpoint_2m: string
  precipitation_probability: string
  rain: string
  relativehumidity_2m: string
  showers: string
  temperature_2m: string
  time: string
  weathercode: string
}

interface Meteo {
  elevation: number
  generationtime_ms: number
  hourly: Hourly
  hourly_units: HourlyUnits
  latitude: number
  longitude: number
  timezone: string
  timezone_abbreviation: string
  utc_offset_seconds: number
}
