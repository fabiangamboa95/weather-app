interface CurrentWeather {
  is_day: 1 | 0
  temperature: number
  time: string
  weathercode: number
  winddirection: string
  windspeed: number
}

interface Daily {
  temperature_2m_max: number[]
  time: string[]
  weathercode: number[]
}

interface DailyUnits {
  temperature_2m_max: string
  time: string
  weathercode: string
}

interface Hourly {
  temperature_2m: number[]
  dewpoint_2m: number[]
  precipitation_probability: number[]
  relativehumidity_2m: number[]
  temperature_2m: number[]
  time: string[]
  uv_index: number[]
  uv_index_clear_sky: number[]
}

interface HourlyUnits {
  apparent_temperature: string
  dewpoint_2m: string
  precipitation_probability: string
  relativehumidity_2m: string
  temperature_2m: string
  time: string
  uv_index: string
  uv_index_clear_sky: string
}

interface Root {
  current_weather: CurrentWeather
  daily: Daily
  daily_units: DailyUnits
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
