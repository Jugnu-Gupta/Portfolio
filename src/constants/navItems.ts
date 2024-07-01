interface NavItem {
	id: number;
	name: string;
}

const NAVEITEMS: NavItem[] = [
	{ id: 0, name: "HOME" },
	{ id: 1, name: "ABOUT" },
	{ id: 2, name: "PROJECTS" },
	{ id: 3, name: "CONTACT" },
];

export default NAVEITEMS;
export type { NavItem };
