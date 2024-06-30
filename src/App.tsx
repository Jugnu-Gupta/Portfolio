import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="bg-white">
			<Navbar />
			<Home />
			<About />
			<TechStack />
			<Projects />
			<div className="h-[100vh]"></div>
		</div>
	);
}

export default App;
