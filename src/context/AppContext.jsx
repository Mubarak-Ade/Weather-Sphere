import React, { createContext, useEffect, useState } from 'react'

export const MainContext = createContext()


function AppContext({children}) {
	const [weatherData, setWeatherData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [city, setCity] = useState('Kano')

	const apiKey = import.meta.env.VITE_API_KEY
	const handleDataFetch = async () => {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

		if (!city.trim()) {
			setError("Please enter a city name")
			return;
		}
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(url)

			if (!response.ok) {
				throw new Error("City Not Found");
			}
			const data = await response.json()
			const temperature =(data.main.temp - 273.15).toFixed(2)

			setWeatherData({
				temperature,
				weatherDescription: data.weather[0].description,
				windSpeed: data.wind.speed,
				humidity: data.main.humidity,
				icon: data.weather[0].icon,
				// observationTime: data.current.observation_time,
				country: data.sys.country,
				name: data.name,
				bg: handleBgChange(temperature)
			})
			console.log(data)
		} catch (error) {
			setError(error.message)
			console.error(error.message);
		} finally {
			setLoading(false)
		}
	}

	const handleBgChange = (temperature) => {

		if(temperature <= 0) {
			return "./assets/Images/svg/weather-svg/snow.svg"	
		} else if (temperature > 0 && temperature <= 20) {
			return "./assets/Images/svg/weather-svg/cloudy-day.svg"
		} else if ( temperature > 20 && temperature <= 30) {
			return "./assets/Images/svg/weather-svg/weather-icons.svg"
		} else {
			return "./assets/Images/svg/weather-svg/sunny.svg"
		} 
	}
	

	useEffect(() => {
		handleDataFetch()
	}, [city])

	return (
		<MainContext.Provider value={{ city, setCity, handleDataFetch, setError, loading, error, weatherData }}>
			{children}
		</MainContext.Provider>
	)
}

export default AppContext
