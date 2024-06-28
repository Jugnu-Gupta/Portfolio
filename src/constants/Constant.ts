interface NavItem {
	id: number;
	name: string;
}

const navItems: NavItem[] = [
	{ id: 0, name: "HOME" },
	{ id: 1, name: "ABOUT" },
	{ id: 2, name: "PROJECTS" },
	{ id: 3, name: "CONTACT" },
];

export { navItems };
export type { NavItem };