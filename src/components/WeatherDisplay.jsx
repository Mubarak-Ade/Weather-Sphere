import React, { useContext, useState } from 'react'
import { MainContext } from '../context/AppContext'

function WeatherDisplay() {
	const {loading, error, weatherData, city} = useContext(MainContext)

	const [date, setDate] = useState(new Date())

	const handleDate = () => {
		const hour = date.getHours().toString().padStart(2, 0)
		const minute = date.getMinutes().toString().padStart(2, 0)
		let meridian = null
		if(hour >= 12) {
			meridian = "PM"
		} else {
			meridian = "AM"
		}
		return `${hour} : ${minute} ${meridian}`
	}




	return (
		<div className='p-4 my-10 flex flex-col gap-10 justify-around items-center'>
			<h1 className='sm:text-7xl text-5xl lg:text-8xl md:text-8xl text-white font-playfair-display font-bold'>{handleDate()}</h1>
			{loading && <p>Loading...</p>}
			{error && <p className='text-3xl font-playfair-display text-red-500'>Error: {error} </p>}
			{weatherData && (
				<div className="w-full">
					<div className="flex gap-5 flex-col justify-around items-center lg:flex-row">
						<div className="text-blue-400 flex flex-col items-center justify-between gap-2">
							<h1 className='text-5xl font-edu-au-vic-wa-nt-pre font-bold'>{weatherData.name}</h1>
							<h2 className='text-4xl font-edu-au-vic-wa-nt-pre font-bold'>- {weatherData.country} -</h2>
						</div>
						<img src={weatherData.bg} className='w-28 rounded-full' alt="" />
						<h1 className='text-5xl text-white font-edu-au-vic-wa-nt-pre font-bold'>{weatherData.temperature}℃</h1>
					</div>
					<div className="flex flex-col items-center w-full font-sour-gummy text-sm md:text-2xl text-slate-200 py-6 mt-4">
						<p>{`Weather description: ${weatherData.weatherDescription}`}</p>
						<p>{`Humidity: ${weatherData.humidity}%`}</p>
						<p>{`Wind Speed: ${weatherData.windSpeed}km`}</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default WeatherDisplay
