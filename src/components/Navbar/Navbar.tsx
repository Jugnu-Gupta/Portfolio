import React from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import Hamburger from "./Hamburger";

const Navbar: React.FC = () => {
	return (
		<div className="shadow-lg w-full fixed backdrop-blur-lg bg-secondaryDarkBg z-40">
			<nav className="max-w-6xl mx-auto w-11/12 flex justify-between h-16 items-center">
				<div className="flex gap-3">
					<h1 className="text-primary text-lg font-bold flex items-center">
						<FaLessThan className="text-xs" />
						<span>J/</span>
						<FaGreaterThan className="text-xs" />
					</h1>
					<h1 className="text-base text-white font-bold">
						JUGNU GUPTA
					</h1>
				</div>
				<Hamburger />
			</nav>
		</div>
	);
};

export default Navbar;
