import React from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import Hamburger from "./Hamburger";

const Navbar = () => {
	return (
		<div className="bg-white shadow-xl">
			<nav className="max-w-7xl mx-auto w-5/6 flex justify-between h-16 items-center">
				<div className="flex gap-3">
					<h1 className="text-primary text-lg font-bold flex items-center">
						<FaLessThan className="text-xs" />
						<span>J/</span>
						<FaGreaterThan className="text-xs" />
					</h1>
					<h1 className="text-base text-dark font-semibold">
						JUGNU GUPTA
					</h1>
				</div>
				{false && (
					<div className="flex gap-6">
						<h1 className="text-primary text-sm font-bold flex items-center">
							<FaLessThan className="text-xs" />
							<span>HOME/</span>
							<FaGreaterThan className="text-xs" />
						</h1>
						<h1 className="text-dark text-sm font-bold flex items-center">
							<FaLessThan className="text-xs" />
							<span>ABOUT/</span>
							<FaGreaterThan className="text-xs" />
						</h1>
						<h1 className="text-dark text-sm font-bold flex items-center">
							<FaLessThan className="text-xs" />
							<span>PROJECTS/</span>
							<FaGreaterThan className="text-xs" />
						</h1>
						<h1 className="text-dark text-sm font-bold flex items-center">
							<FaLessThan className="text-xs" />
							<span>CONTACT/</span>
							<FaGreaterThan className="text-xs" />
						</h1>
					</div>
				)}
				<Hamburger />
			</nav>
		</div>
	);
};

export default Navbar;
