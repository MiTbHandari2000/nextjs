interface WeatherData {
    name: string
    main: {
      temp: number
      humidity: number
      feels_like: number
    }
    weather: Array<{
      main: string
      description: string
      icon: string
    }>
    wind: {
      speed: number
    }
  }
  
  interface WeatherCardProps {
    data: WeatherData
  }
  
  export default function WeatherCard({ data }: WeatherCardProps) {
    return (
      <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{data.name}</h2>
            <p className="text-gray-600">
              {data.weather[0].main} - {data.weather[0].description}
            </p>
          </div>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt={data.weather[0].description}
            width={100}
            height={100}
          />
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Temperature</p>
            <p className="text-xl font-semibold">{Math.round(data.main.temp)}°C</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Feels Like</p>
            <p className="text-xl font-semibold">
              {Math.round(data.main.feels_like)}°C
            </p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Humidity</p>
            <p className="text-xl font-semibold">{data.main.humidity}%</p>
          </div>
          <div className="p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Wind Speed</p>
            <p className="text-xl font-semibold">{data.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    )
  }