import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

function App() {
	return (
		<div className="bg-white">
			<Navbar />
			<Home />
			<About />
			<TechStack />
			<Projects />
			<Achievements />
			<Contact />
		</div>
	);
}

export default App;
