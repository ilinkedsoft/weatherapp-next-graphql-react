interface ConfigInput {
  units: "metric" | "imperial" | "kelvin"
}

interface Summary {
  title: string
  description: string
  icon: string
}

interface Temperature {
  actual?: number
  feelsLike: number
  min: number
  max: number
}

interface Wind {
  speed: number
  deg: number
}

interface Clouds {
  all: number
  visibility: number
  humidity: number
}

interface Weather {
  summary: Summary
  temperature: Temperature
  wind: Wind
  clouds: Clouds
  timestamp: number
}

interface getCityByName {
  id: number
  name: string
  country: string
  weather: Weather
}