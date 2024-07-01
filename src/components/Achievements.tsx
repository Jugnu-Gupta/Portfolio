import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ACHIVEMENTS from "../constants/achievements";
import { twMerge } from "tailwind-merge";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Achievements() {
	useEffect(() => {
		AOS.init({ duration: 700 });
		AOS.refresh();
	}, []);

	return (
		<div className="w-full overflow-hidden">
			<div className="max-w-6xl mx-auto w-11/12 relative z-10 pb-10">
				<h1 className="mt-8 flex justify-center text-primary text-2xl font-bold text-center">
					<span className="pr-2">ACHIEVEMENTS</span>
				</h1>
				<div className="h-1 rounded-full w-8 bg-primary mx-auto mb-6 mt-2"></div>
			</div>
			<div className="my-12">
				<VerticalTimeline
					lineColor="#05cbf7"
					className="pt-16 "
					animate={true}>
					{ACHIVEMENTS.map((achieve, index) => {
						return (
							<VerticalTimelineElement
								key={achieve.id}
								className="mb-20 vertical-timeline-element--work"
								iconClassName="shadow-md shadow-lg "
								icon={
									<div className="flex items-center justify-center w-full h-full bg-white rounded-full">
										<img
											src={achieve.icon}
											className="object-center w-7 lgm:w-9 aspect-square"
										/>
									</div>
								}
								contentStyle={{
									boxShadow:
										"0px 2px 10px rgba(0, 0, 0, 0.1)",
								}}>
								<h3
									className={twMerge(
										"absolute -top-11 bg-primary text-white font-semibold px-4 py-1 rounded-full ",
										index & 1
											? "lgm:left-0"
											: "lgm:right-0 "
									)}>
									{achieve.date}
								</h3>
								<div className="mb-2">
									<h1 className="text-primary font-semibold text-xl tracking-wide">
										{achieve.title}
									</h1>
									<h4 className="text-primary font-semibold text-sm tracking-wide">
										{achieve.subTitle}
									</h4>
									<p className="text-dark-light whitespace-pre-wrap ">
										{achieve.description}
									</p>
									<button
										className="px-6 py-2 rounded-sm text-sm mt-4 text-white bg-primary font-semibold shadow-md hover:scale-105 duration-1000 hover:duration-300 active:scale-95"
										aria-label={`${achieve.title} View`}
										onClick={() =>
											window.open(achieve.link, "_blank")
										}>
										VIEW
									</button>
								</div>
							</VerticalTimelineElement>
						);
					})}
				</VerticalTimeline>
			</div>
		</div>
	);
}

export default Achievements;
