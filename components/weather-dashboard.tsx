'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Cloud, 
  CloudRain, 
  Sun, 
  Wind, 
  Droplets, 
  Thermometer,
  Eye,
  Gauge,
  TrendingUp,
  MapPin
} from 'lucide-react'

interface WeatherData {
  location: string
  current: {
    temp: number
    condition: string
    humidity: number
    windSpeed: number
    windDirection: string
    pressure: number
    visibility: number
    feelsLike: number
    precipitation: number
  }
  forecast: {
    day: string
    high: number
    low: number
    condition: string
    precipChance: number
  }[]
  agricultural: {
    growingDegreeDays: number
    soilTemp: number
    soilMoisture: number
    evapotranspiration: number
  }
}

const mockWeatherData: WeatherData = {
  location: 'Arthur, ND',
  current: {
    temp: 72,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
    windDirection: 'NW',
    pressure: 30.12,
    visibility: 10,
    feelsLike: 75,
    precipitation: 0.0,
  },
  forecast: [
    { day: 'Today', high: 78, low: 62, condition: 'Partly Cloudy', precipChance: 20 },
    { day: 'Tomorrow', high: 82, low: 65, condition: 'Sunny', precipChance: 10 },
    { day: 'Thursday', high: 79, low: 63, condition: 'Cloudy', precipChance: 40 },
    { day: 'Friday', high: 75, low: 60, condition: 'Rain', precipChance: 80 },
    { day: 'Saturday', high: 77, low: 61, condition: 'Partly Cloudy', precipChance: 30 },
    { day: 'Sunday', high: 80, low: 64, condition: 'Sunny', precipChance: 15 },
    { day: 'Monday', high: 83, low: 66, condition: 'Sunny', precipChance: 5 },
  ],
  agricultural: {
    growingDegreeDays: 1245,
    soilTemp: 68,
    soilMoisture: 35,
    evapotranspiration: 0.18,
  },
}

export function WeatherDashboard() {
  const [weather] = useState<WeatherData>(mockWeatherData)

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-6 w-6" />
      case 'rain':
        return <CloudRain className="h-6 w-6" />
      case 'cloudy':
      case 'partly cloudy':
      default:
        return <Cloud className="h-6 w-6" />
    }
  }

  const getWeatherColor = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return 'text-yellow-500'
      case 'rain':
        return 'text-blue-500'
      case 'cloudy':
      case 'partly cloudy':
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="w-full">
      {/* Location Info */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="font-medium">{weather.location}</span>
            <span className="text-xs">• Updated 5 minutes ago</span>
          </div>
          <h3 className="text-title">Agricultural Weather</h3>
        </div>
      </div>

      {/* Current Conditions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Main Weather Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 p-8 card-refined"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-6xl font-semibold text-foreground">
                  {weather.current.temp}°
                </span>
                <div className={`${getWeatherColor(weather.current.condition)}`}>
                  {getWeatherIcon(weather.current.condition)}
                </div>
              </div>
              <p className="text-body-large mt-2">{weather.current.condition}</p>
              <p className="text-small text-muted-foreground">
                Feels like {weather.current.feelsLike}°
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Wind className="h-4 w-4 text-muted-foreground" />
                <span>{weather.current.windSpeed} mph {weather.current.windDirection}</span>
              </div>
              <div className="flex items-center gap-2">
                <Droplets className="h-4 w-4 text-muted-foreground" />
                <span>{weather.current.humidity}%</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="h-4 w-4 text-muted-foreground" />
                <span>{weather.current.pressure} in</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-muted-foreground" />
                <span>{weather.current.visibility} mi</span>
              </div>
            </div>
          </div>

          {/* Hourly Graph Placeholder */}
          <div className="h-24 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg flex items-end px-2 py-1">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="flex-1 mx-0.5 bg-primary/30 rounded-t"
                style={{
                  height: `${30 + Math.random() * 70}%`,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Agricultural Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 card-refined"
        >
          <h3 className="text-title mb-4">Field Conditions</h3>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-small text-muted-foreground">Growing Degree Days</span>
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <p className="text-2xl font-semibold">{weather.agricultural.growingDegreeDays}</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-small text-muted-foreground">Soil Temperature</span>
                <Thermometer className="h-4 w-4 text-orange-500" />
              </div>
              <p className="text-2xl font-semibold">{weather.agricultural.soilTemp}°F</p>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-small text-muted-foreground">Soil Moisture</span>
                <Droplets className="h-4 w-4 text-blue-500" />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: `${weather.agricultural.soilMoisture}%` }}
                  />
                </div>
                <span className="text-small font-medium">{weather.agricultural.soilMoisture}%</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-small text-muted-foreground">ET Rate</span>
              </div>
              <p className="text-2xl font-semibold">{weather.agricultural.evapotranspiration}" /day</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 7-Day Forecast */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 card-refined"
      >
        <h3 className="text-title mb-6">7-Day Forecast</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {weather.forecast.map((day, index) => (
            <div
              key={day.day}
              className="text-center p-4 rounded-lg hover:bg-secondary/50 transition-colors"
            >
              <p className="text-small font-medium mb-3">{day.day}</p>
              <div className={`mb-3 flex justify-center ${getWeatherColor(day.condition)}`}>
                {getWeatherIcon(day.condition)}
              </div>
              <p className="text-lg font-semibold">{day.high}°</p>
              <p className="text-small text-muted-foreground">{day.low}°</p>
              {day.precipChance > 0 && (
                <p className="text-xs text-blue-500 mt-2">{day.precipChance}%</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Weather Alerts */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-yellow-600 text-sm font-bold">!</span>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-yellow-900 mb-1">
              Agricultural Advisory
            </h4>
            <p className="text-sm text-yellow-800">
              Optimal spraying conditions expected tomorrow morning between 6-10 AM with low wind speeds 
              and moderate temperatures. Rain likely Friday - plan field operations accordingly.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}