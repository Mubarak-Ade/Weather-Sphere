import React, { useContext } from "react"
import Container from "./components/container"
import AppContext, { MainContext } from "./context/AppContext"

function App() {

	return (
		<AppContext>
			<Container />
		</AppContext>
	)
}

export default App
