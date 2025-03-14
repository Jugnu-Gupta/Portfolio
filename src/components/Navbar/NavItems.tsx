import React, { useState } from "react";
import NAVEITEMS from "../../constants/navItems";

const NavItems: React.FC = () => {
	const [selectedItem, setSelectedItem] = useState<number>(0);

	return (
		<>
			{NAVEITEMS.map((item) => {
				return (
					<a href={"#" + item.name.toLowerCase()}>
						<h1
							key={item.id}
							onClick={() => setSelectedItem(item.id)}
							className={`text-sm font-bold flex items-center cursor-pointer group hover:text-primary 
						${item.id === selectedItem ? "text-primary" : "text-white"}`}>
							<span
								className={`group-hover:opacity-100 text-base -mr-[2px] 
							${item.id === selectedItem ? "opacity-100" : "opacity-0"}`}>
								&lt;
							</span>
							<span>{item.name}</span>
							<span
								className={`group-hover:opacity-100 text-base
							${item.id === selectedItem ? "opacity-100" : "opacity-0"}`}>
								/
							</span>
							<span
								className={`group-hover:opacity-100 text-base pb-[0px] -ml-[2px]
							${item.id === selectedItem ? "opacity-100" : "opacity-0"}`}>
								&gt;
							</span>
						</h1>
					</a>
				);
			})}
		</>
	);
};

export default NavItems;
