import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./pages/Projects";

const App = () => {
	const greeting = "Hello React!";

	return (
		<div>
			<Navbar />
			<Header />
			<h1 className="title">{greeting}</h1>
			<p>React is a Javascript library for building user interfaces</p>
			<Projects />
		</div>
	);
};

export default App;
