import React, { createContext, useEffect, useState } from 'react'

export const MainContext = createContext()

function AppContext({children}) {
	const [weatherData, setWeatherData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [city, setCity] = useState('Kano')

	const handleDataFetch = async () => {
		const apiKey = '6dcec1f06a009ce5fd88ea7cd32dee77'
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
			return '/src/assets/Images/svgs/weather svg/windy-svgrepo-com.svg'
		} else if (temperature > 0 && temperature <= 20) {
			return '/src/assets/Images/svgs/weather svg/cloudy-day-svgrepo-com.svg'
		} else if ( temperature > 20 && temperature <= 30) {
			return '/src/assets/Images/svgs/weather svg/weather-icons-35-svgrepo-com.svg'
		} else {
			return '/src/assets/Images/svgs/weather svg/sunny-svgrepo-com.svg'
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
