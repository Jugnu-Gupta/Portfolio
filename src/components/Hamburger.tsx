import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { navItems, NavItem } from "../constants/Constant";

const Hamburger: React.FC = () => {
	const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState<number>(0);
	const hamburgerMenu = React.createRef<HTMLDivElement>();
	// const navigate = useNavigate();

	function resizeHandler() {
		setScreenWidth(window.innerWidth);
	}

	function navItemSelectionHandler(item: NavItem) {
		setSelectedItem(item.id);
		// navigate(item.name.toLowerCase());
	}

	useEffect(() => {
		window.addEventListener("resize", resizeHandler);
	}, []);

	function showMenuHandler() {
		hamburgerMenu.current?.classList.toggle("animate-left");
		hamburgerMenu.current?.classList.toggle("animate-right");
		setTimeout(() => {
			setShowMenu(!showMenu);
		}, 500);
	}
	// console.log("screenWidth", screenWidth);
	// console.log("showMenu", showMenu);

	return (
		<>
			{screenWidth <= 776 ? (
				<div className="relative">
					<button type="submit" name="menu" onClick={showMenuHandler}>
						{showMenu ? (
							<RxCross2 className="text-2xl font-bold" />
						) : (
							<RxHamburgerMenu className="text-2xl font-bold" />
						)}
					</button>

					{showMenu && (
						<div
							ref={hamburgerMenu}
							className="absolute top-[46px] w-[100vw] -right-[8vw] gap-4 bg-white 
							shadow-xl px-[8vw] pb-4 flex flex-col items-center animate-left">
							<div className="h-[1px] bg-dark-light w-full"></div>
							{navItems.map((item) => {
								return (
									<h1
										key={item.id}
										onClick={() =>
											navItemSelectionHandler(item)
										}
										className={`text-sm font-bold flex items-center 
										${item.id === selectedItem ? "text-primary" : "text-dark"}`}>
										<FaLessThan className="text-xs" />
										<span>{item.name}/</span>
										<FaGreaterThan className="text-xs" />
									</h1>
								);
							})}
						</div>
					)}
				</div>
			) : (
				<div className="flex gap-6">
					{navItems.map((item) => {
						return (
							<h1
								key={item.id}
								onClick={() => handleNavItemSelection(item)}
								className={`text-sm font-bold flex items-center 
								${item.id == selectedItem ? "text-primary" : "text-dark"}`}>
								<FaLessThan className="text-xs" />
								<span>{item.name}/</span>
								<FaGreaterThan className="text-xs" />
							</h1>
						);
					})}
				</div>
			)}
		</>
	);
};

export default Hamburger;
