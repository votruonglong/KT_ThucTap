const radioOptions = [
	{
		text: "Tất cả",
		defaultChecked: true,
		svgs: [],
	},
	{
		text: "Chưa trả lời",
		defaultChecked: false,
		svgs: [],
	},
	{
		text: "Đã trả lời",
		defaultChecked: false,
		svgs: [],
	},
	{
		text: "Tăng dần",
		defaultChecked: false,
		svgs: [
			{
				fill: "red",
				viewBox: "0 0 512 512",
				width: "16",
				path: "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z",
			},
			{
				width: "20",
				viewBox: "0 0 24 24",
				fill: "none",
				path: "M16.5 16L18.5 14V21M16.5 21H20.5M20.5 7L18 10M7 21V3M7 3L3 7M7 3L11 7M21 5.5C21 6.88071 19.8807 8 18.5 8C17.1193 8 16 6.88071 16 5.5C16 4.11929 17.1193 3 18.5 3C19.8807 3 21 4.11929 21 5.5Z",
				stroke: "#000000",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
			},
		],
	},
	{
		text: "Giảm dần",
		defaultChecked: false,
		svgs: [
			{
				fill: "red",
				viewBox: "0 0 512 512",
				width: "16",
				path: "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z",
			},
			{
				width: "20",
				viewBox: "0 0 24 24",
				fill: "none",
				path: "M7 3V21M7 21L3 17M7 21L11 17M16.5 16L18.5 14V21M16.5 21H20.5M20.5 7L18 10M21 5.5C21 6.88071 19.8807 8 18.5 8C17.1193 8 16 6.88071 16 5.5C16 4.11929 17.1193 3 18.5 3C19.8807 3 21 4.11929 21 5.5Z",
				stroke: "#000000",
				strokeWidth: 2,
				strokeLinecap: "round",
				strokeLinejoin: "round",
			},
		],
	},
];

import PropTypes from "prop-types";


const RadioInputs = ({ questions, setFilteredQuestions }) => {
	// Handle filter questions
	const handleFilter = (option) => {
		let newQuestions = [...questions];
		if (option.text === "Tất cả") {
			newQuestions.sort((a, b) => b.id - a.id);
		} else if (option.text === "Chưa trả lời") {
			newQuestions = newQuestions.filter((q) => !q.isAnswer);
		} else if (option.text === "Đã trả lời") {
			newQuestions = newQuestions.filter((q) => q.isAnswer);
		} else if (option.svgs.length > 0) {
			if (option.text === "Tăng dần") {
				newQuestions.sort((a, b) => a.numberOfLikes - b.numberOfLikes);
			} else {
				newQuestions.sort((a, b) => b.numberOfLikes - a.numberOfLikes);
			}
		}
		setFilteredQuestions(newQuestions); // Update filtered questions
	};



	return (
		<span className="radio-inputs-cover">
			<div className="radio-inputs">
				{radioOptions.map((option, index) => (
					<label key={index} className="radio">
						<input type="radio" name="radio" defaultChecked={option.defaultChecked} onChange={() => handleFilter(option)} />
						<span className="name">
							{option.svgs.length === 0 && option.text}
							{option.svgs.map((svg, svgIndex) => (
								<svg key={svgIndex} fill={svg.fill} viewBox={svg.viewBox} width={svg.width} xmlns="http://www.w3.org/2000/svg">
									<path
										d={svg.path}
										stroke={svg.stroke}
										strokeWidth={svg.strokeWidth}
										strokeLinecap={svg.strokeLinecap}
										strokeLinejoin={svg.strokeLinejoin}
									/>
								</svg>
							))}
						</span>
					</label>
				))}
			</div>
		</span>
	);
};

RadioInputs.propTypes = {
	questions: PropTypes.array.isRequired,
	setFilteredQuestions: PropTypes.func.isRequired,
};

export default RadioInputs;
