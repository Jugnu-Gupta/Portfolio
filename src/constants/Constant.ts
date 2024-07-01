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

interface PROJECT {
    id: number;
    name: string;
    description: string[];
    logoUrl: string;
    websiteImgUrl: string;
    technologies: string[];
    githubUrl: string;
    websiteUrl: string;
}

const PROJECTS: PROJECT[] = [
    {
        id: 1,
        name: "Food Fusion",
        description: [
            "Develop a website that provides detailed descriptions of the food items of restaurants.",
            "Build a search feature allowing users to find restaurants by name, complemented by shimmer animations serving as placeholders during content loading.",
            "The cart feature gives users a centralized and convenient way to gather, review, and manage items they wish to purchase before checking out."
        ],
        logoUrl: "https://github.com/Jugnu-Gupta/Food-Fusion/blob/main/src/assets/logo.png?raw=true",
        websiteImgUrl:"https://github.com/Jugnu-Gupta/Food-Fusion/blob/main/src/assets/websiteImg.png?raw=true",
        technologies: ["HTML", "Tailwind CSS", "ReactJs"],
        githubUrl: "https://github.com/Jugnu-Gupta/Food-Fusion",
        websiteUrl: "https://jugnu-gupta-food-fusion.vercel.app/",
    },
    {
        id: 2,
        name: "Sketch Verse",
        description: [
            "Develop a web app that provides users with an intuitive and powerful online drawing tool.",
            "Build various tools, including pens, shapes, erasers, color palettes, draggable notes, zoom functionality, multiple-page support, undo/redo capabilities, and the option to save/export drawings in PNG format.",
            "Ensure a seamless user experience with a responsive design and easy-to-use interface."
        ],
        logoUrl: "https://github.com/Jugnu-Gupta/SketchVerse/blob/main/src/assets/logo.png?raw=true",
        websiteImgUrl:"https://github.com/Jugnu-Gupta/SketchVerse/blob/main/src/assets/websiteImg.png?raw=true",
        technologies: ["HTML", "Tailwind CSS", "Javascript"],
        githubUrl: "https://github.com/Jugnu-Gupta/SketchVerse",
        websiteUrl: "https://sketchverse.vercel.app/",
    },
]

export { navItems, PROJECTS };
export type { NavItem,PROJECT };