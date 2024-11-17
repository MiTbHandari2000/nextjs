'use client'

import { useState } from 'react'
import WeatherCard from '@/components/WeatherCard'
import SearchBar from '@/components/SearchBar'
export default function Home() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (city: string) => {
    setLoading(true)
    setError('')
    
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
      )
      
      if (!res.ok) {
        throw new Error('City not found')
      }
      
      const data = await res.json()
      setWeatherData(data)
    } catch (err) {
      setError('Failed to fetch weather data')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen p-8 bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Weather App
        </h1>
        <SearchBar onSearch={fetchWeather} />
        
        {loading && (
          <div className="text-center mt-8">Loading...</div>
        )}
        
        {error && (
          <div className="text-center mt-8 text-red-500">{error}</div>
        )}
        
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </main>
  )
}