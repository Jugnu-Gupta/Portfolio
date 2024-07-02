import { useEffect } from "react";
import linkedIn from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import github from "../assets/github.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
	useEffect(() => {
		AOS.init({ duration: 1000 });
		AOS.refresh();
	}, []);

	return (
		<section
			id="contact"
			className="flex flex-col items-center justify-center pt-24">
			<div
				className="flex flex-col items-center justify-center px-8 header"
				data-aos="fade-in">
				<h1 className="text-primary text-3xl font-bold mb-2 text-center tracking-wide">
					GET IN TOUCH
				</h1>
				<div className="h-[0.30rem] w-10 bg-primary rounded-full mb-1"></div>
			</div>

			<div className="border-t-[6vw] border-l-[100vw] border-t-primaryBg border-l-primary -mb-1"></div>

			<div className="bg-primary w-full">
				<div className="max-w-6xl mx-auto w-11/12 py-8 lg:py-16 relative ">
					<div className="flex flex-col items-center justify-center gap-4 lg:gap-8 ">
						<div className="flex flex-col items-center justify-center w-2/3 gap-2">
							<p
								className=" text-[1.2rem] tracking-wide text-center text-white w-full"
								data-aos="fade-up">
								I am currently looking for new opportunities. My
								inbox is always open, so feel free to reach out
								if you have any questions or just want to say
								hi. I will do my best to get back to you as soon
								as possible.
							</p>
							<div className="flex mt-6 gap-7" data-aos="zoom-in">
								<a
									href="https://www.linkedin.com/in/jugnugupta33"
									target="_blank"
									className="p-1 bg-white rounded-sm  hover:scale-110 duration-1000 hover:duration-300 active:scale-95 shadow-lg">
									<img
										src={linkedIn}
										loading="lazy"
										className="w-8"
										alt="LinkedIn"
									/>
								</a>
								<a
									href="mailto:jugnugupta33@gmial.com"
									className="p-1 bg-white rounded-sm  hover:scale-110 duration-1000 hover:duration-300 active:scale-95 shadow-lg">
									<img
										src={gmail}
										loading="lazy"
										className="w-8"
										alt="LinkedIn"
									/>
								</a>
								<a
									href="https://github.com/Jugnu-Gupta"
									className="p-1 bg-white rounded-sm  hover:scale-110 duration-1000 hover:duration-300 active:scale-95 shadow-lg">
									<img
										src={github}
										loading="lazy"
										className="w-8"
										alt="LinkedIn"
									/>
								</a>
							</div>
							<div className="mt-4" data-aos="fade-up">
								<button
									className="ml-9 px-6 my-4 py-2 text-primary font-bold text-sm 
									bg-white duration-300 hover:scale-110 hover:translate-x-5">
									<a href="#">SEE MY RESUME</a>
								</button>
							</div>
						</div>
						<div
							className="w-full  mt-4 border-8 border-white shadow-lg shadow-[color:var(--primary-shadow-color)] h-[300px] lg:h-[350px] flex items-center justify-center bg-[color:var(--secondary-background-color)]"
							data-aos="zoom-in">
							<iframe
								title="My Location"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.02670427057078!2d77.28255034027204!3d28.556929835391184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3d2a5c32827%3A0x399703d8db4a8713!2sMariyam%20Residency!5e0!3m2!1sen!2sin!4v1688108537681!5m2!1sen!2sin"
								width="100%"
								height="100%"
								allowFullScreen={true}
								loading="lazy"></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
