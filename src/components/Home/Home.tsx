import React from "react";
import Typewriter from "typewriter-effect";
import { IoLogoGithub } from "react-icons/io";
import linkedIn from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import Photo from "./Photo";

const position: string[] = [
	"a full stack developer.",
	"a DSA enthusiast.",
	"a student.",
];

const Home: React.FC = () => {
	return (
		<div className="bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto w-11/12 flex justify-between items-center">
				<div className="tracking-wide mt-10">
					<p className="text-dark-light">&lt;html/&gt;</p>
					<p className="pl-3 text-dark-light">&lt;body/&gt;</p>
					<p className="pl-6 text-dark-light">&lt;h1&gt;</p>
					<h1 className="pl-9 text-4xl font-semibold transition-all duration-500 ease-out hover:translate-x-5">
						Hello
					</h1>

					<h1 className="pl-9 text-4xl font-semibold transition-all duration-500 ease-out hover:translate-x-5">
						<span>I'm </span>
						<span className="text-primary"> Jugnu Gupta</span>
					</h1>
					<p className="pl-6 text-dark-light">&lt;/h1&gt;</p>

					<p className="pl-6 text-dark-light">&lt;h3&gt;</p>
					<h2 className="pl-9 relative overflow-hidden text-3xl font-semibold transition-all ease-out duration-500 hover:translate-x-5">
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
					<p className="pl-6 text-dark-light">&lt;/h3&gt;</p>

					<p className="pl-6 text-dark-light">&lt;button&gt;</p>
					<button
						className="ml-9 px-4 my-4 py-1 border-2 border-primary text-primary font-semibold text-sm 
						bg-white transition-all duration-500 ease-out hover:translate-x-5">
						<a href="#">SEE MY RESUME</a>
					</button>

					<div className="pl-9 flex gap-4 my-4">
						<a
							href="#"
							className="transition-all duration-500 hover:translate-x-1">
							<img
								src={linkedIn}
								alt="linkedIn link"
								className="w-5"
							/>
						</a>
						<a
							href="#"
							className="transition-all duration-500 hover:translate-x-1">
							<img src={gmail} alt="gmail link" className="w-5" />
						</a>
						<a
							href="#"
							className="transition-all duration-500 hover:translate-x-1">
							<IoLogoGithub className="text-xl text-dark" />
						</a>
					</div>
					<p className="pl-6 text-dark-light">&lt;/button&gt;</p>
					<p className="pl-3 text-dark-light">&lt;/body&gt;</p>
					<p className="text-dark-light">&lt;/html&gt;</p>
				</div>

				<Photo />
			</div>
		</div>
	);
};

export default Home;
