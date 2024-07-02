import React from "react";
import Typewriter from "typewriter-effect";
import { IoLogoGithub } from "react-icons/io";
import linkedIn from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
// import Photo from "./Photo";
import jugnu from "../../assets/jugnu.png";

const position: string[] = [
	"a full stack developer.",
	"a DSA enthusiast.",
	"a student.",
];

const Home: React.FC = () => {
	return (
		<section id="home" className="overflow-hidden h-full relative z-10">
			<div className="max-w-6xl mx-auto w-11/12 flex justify-between items-center">
				<div className="tracking-wide text-dark-light font-semibold my-48 w-full">
					<p className="text-xs duration-300 hover:scale-110 hover:translate-x-5">
						&lt;html&gt;
					</p>
					<p className="pl-3 text-xs mt-1 duration-300 hover:scale-110 hover:translate-x-5">
						&lt;body&gt;
					</p>
					<p className="pl-6 text-xs mt-2 duration-300 hover:scale-110 hover:translate-x-5">
						&lt;h1&gt;
					</p>
					<h1 className="pl-9 text-4xl text-white duration-300 hover:scale-110 hover:translate-x-5">
						Hello
					</h1>

					<h1 className="pl-9 text-4xl text-white text-nowrap duration-300 hover:scale-110 hover:translate-x-5">
						<span>I'm </span>
						<span className="text-primary"> Jugnu Gupta</span>
					</h1>
					<p className="pl-6 text-xs mt-1 duration-300 hover:scale-110 hover:translate-x-5">
						&lt;/h1&gt;
					</p>

					<p className="pl-6 text-xs mt-1 duration-300 hover:scale-110 hover:translate-x-5">
						&lt;h3&gt;
					</p>
					<h2 className="pl-9 relative overflow-hidden text-3xl text-nowrap text-white duration-300 hover:scale-110 hover:translate-x-5">
						<span>I'm </span>
						<span className="inline-block pl-1 text-primary">
							<Typewriter
								options={{
									strings: position,
									autoStart: true,
									loop: true,
								}}
							/>
						</span>
					</h2>
					<p className="pl-6 text-xs mt-1 duration-300 hover:scale-110 hover:translate-x-5">
						&lt;/h3&gt;
					</p>

					<p className="pl-6 text-xs mt-1 duration-300 hover:scale-110 hover:translate-x-5">
						&lt;button&gt;
					</p>
					<button
						className="ml-9 px-4 my-4 py-1 border-2 border-primary text-primary font-semibold text-sm 
						bg-primaryBg duration-300 hover:scale-110 hover:translate-x-5">
						<a href="#">SEE MY RESUME</a>
					</button>

					<div className="pl-9 flex gap-4 my-4">
						<a
							href="https://www.linkedin.com/in/jugnugupta33"
							target="_blank"
							className="duration-300 hover:scale-110 hover:translate-x-1">
							<img
								src={linkedIn}
								loading="lazy"
								alt="linkedIn link"
								className="w-5"
							/>
						</a>
						<a
							href="mailto:jugnugupta33@gmial.com"
							className="duration-300 hover:scale-110 hover:translate-x-1">
							<img
								src={gmail}
								loading="lazy"
								alt="gmail link"
								className="w-5"
							/>
						</a>
						<a
							href="https://github.com/Jugnu-Gupta"
							target="_blank"
							className="duration-300 hover:scale-110 hover:translate-x-1">
							<IoLogoGithub className="text-xl text-white" />
						</a>
					</div>
					<p className="pl-6 text-xs mt-1 duration-300 hover:scale-110 hover:translate-x-5">
						&lt;/button&gt;
					</p>
					<p className="pl-3 text-xs mt-2 duration-300 hover:scale-110 hover:translate-x-5">
						&lt;/body&gt;
					</p>
					<p className=" text-xs mt-1 duration-300 hover:scale-110 hover:translate-x-5">
						&lt;/html&gt;
					</p>
				</div>

				{/* <Photo /> */}
				<div className="w-1/2 p-1 aspect-square xs:hidden mix-blend-plus-lighter">
					<img
						src={jugnu}
						loading="lazy"
						className="rounded-full bg-transparent"></img>
				</div>
			</div>
		</section>
	);
};

export default Home;
