import React from "react";
import { motion } from "framer-motion";
import jugnu from "../../assets/jugnu.png";

const Photo: React.FC = () => {
	return (
		<div className="bg-white w-96 h-96 relative xs:hidden">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: { delay: 2, duration: 0.4, ease: "easeInOut" },
				}}>
				{/* image */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							delay: 2,
							duration: 0.4,
							ease: "easeInOut",
						},
					}}
					className="p-1 aspect-square mix-blend-lighter absolute top-0 left-0">
					<img src={jugnu} className="rounded-full"></img>
				</motion.div>

				{/* circle */}
				<motion.svg
					className="w-96 h-96"
					fill="transparent"
					viewBox="0 0 384 384"
					xmlns="http://www.w3.org/2000/svg">
					<motion.circle
						cx="192"
						cy="192"
						r="190"
						stroke="#00ff99"
						strokeWidth="4"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ strokeDasharray: "24 10 0 0" }}
						animate={{
							strokeDasharray: [
								"15 120 25 25",
								"16 25 92 72",
								"4 250 22 22",
							],
							rotate: [120, 360],
							transition: {
								duration: 15,
								repeat: Infinity,
								ease: "easeInOut",
								repeatType: "reverse",
							},
						}}
					/>
				</motion.svg>
			</motion.div>
		</div>
	);
};

export default Photo;
