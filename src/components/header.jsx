import React, { useContext, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import { PiNumpadFill } from 'react-icons/pi'
import { MainContext } from '../context/AppContext'

function Header() {

	const { city, setCity, handleDataFetch, setError } = useContext(MainContext)

	const inputValue = useRef(null)
	
	return (
		<div className="flex justify-around gap-10 items-center md:flex-col md:gap-10 lg:flex-row flex-col">
			<h1 className='lg:text-5xl sm:text-5xl text-3xl  font-bold text-white font-roboto-mono md:text-5xl'>Weather sphere</h1>
			<div className="flex items-center w-[18rem] md:w-[28rem] sm:w-[28rem] relative h-12">
				<button type='submit' onClick={() => handleDataFetch(city)} className='absolute m-4 text-2xl text-white cursor-pointer active:animate-push'><FaSearch /></button>
				<input ref={inputValue} type="text" className='bg-transparent text-opacity-60 font-thin rounded-3xl border h-full font-edu-au-vic-wa-nt-pre w-full pl-14 text-xl text-white' value={city} onChange={(e) => setCity(e.target.value)} placeholder='enter name of city' />
			</div>
		</div>
	)
}

export default Header
