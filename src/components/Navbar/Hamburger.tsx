import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import NavItems from "./NavItems";

const Hamburger: React.FC = () => {
	const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
	const [showMenu, setShowMenu] = useState<boolean>(false);
	const hamburgerMenu = React.createRef<HTMLDivElement>();

	function resizeHandler() {
		setScreenWidth(window.innerWidth);
	}

	function showMenuHandler() {
		if (hamburgerMenu.current?.classList.contains("hidden")) {
			hamburgerMenu.current?.classList.remove("hidden");
		}
		hamburgerMenu.current?.classList.toggle("animate-left");
		hamburgerMenu.current?.classList.toggle("animate-right");
		setShowMenu(!showMenu);
	}

	React.useEffect(() => {
		window.addEventListener("resize", resizeHandler);
	}, []);

	return (
		<>
			{screenWidth <= 776 ? (
				<div className="relative">
					<button type="submit" name="menu" onClick={showMenuHandler}>
						{showMenu ? (
							<RxCross2 className="text-2xl font-bold text-white" />
						) : (
							<RxHamburgerMenu className="text-2xl font-bold text-white" />
						)}
					</button>

					<div
						ref={hamburgerMenu}
						className="absolute z-50 top-[46px] w-[100vw] -right-[4vw] hidden bg-[#020617]
							shadow-xl px-[8vw] pb-4 flex flex-col gap-4 items-center animate-right">
						<div className="h-[1px] bg-dark-light w-full"></div>
						<NavItems />
					</div>
				</div>
			) : (
				<div className="flex gap-6">
					<NavItems />
				</div>
			)}
		</>
	);
};

export default Hamburger;
