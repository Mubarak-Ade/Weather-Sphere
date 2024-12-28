import React, { useContext, useEffect, useState } from 'react'
import Header from './header'
import WeatherDisplay from './WeatherDisplay'
import { MainContext } from '../context/AppContext'

function Container() {

	const weatherData = useContext(MainContext)

	console.log(weatherData.name)

	return (
		<div className={`flex items-center justify-center w-full lg:h-screen h-full ${!weatherData ? `bg-${weatherData.bg}` : 'bg-image-3'} bg-cover`}>
			<div className='bg-slate-600 p-4 bg-opacity-60 rounded-xl h-full w-full lg:h-[35rem] md:h-[55rem] shadow-2xl md:w-10/12 lg:w-10/12'>
				<Header />
				<WeatherDisplay  />
			</div>
		</div>
	)
}

export default Container;
