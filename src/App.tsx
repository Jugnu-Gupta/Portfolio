import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Hero";
import About from "./components/About/About";
import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Achievements from "./components/Achievements/Achievements";
import Contact from "./components/Contact";
import StarsCanvas from "./components/StarBackground";
import jugnu from "./assets/jugnu.png";

function App() {
	return (
		<div className="bg-primaryBg">
			<StarsCanvas />
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
