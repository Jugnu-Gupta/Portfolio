import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";
import { navItems, NavItem } from "../../constants/Constant";

const NavItems: React.FC = () => {
	const [selectedItem, setSelectedItem] = useState<number>(0);
	// const navigate = useNavigate();

	function navItemSelectionHandler(item: NavItem) {
		setSelectedItem(item.id);
		// navigate(item.name.toLowerCase());
	}

	return (
		<>
			{navItems.map((item) => {
				return (
					<h1
						key={item.id}
						onClick={() => navItemSelectionHandler(item)}
						className={`text-sm font-bold flex items-center 
						${item.id === selectedItem ? "text-primary" : "text-dark"}`}>
						<FaLessThan className="text-xs" />
						<span>{item.name}/</span>
						<FaGreaterThan className="text-xs" />
					</h1>
				);
			})}
		</>
	);
};

export default NavItems;
