import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import Dot from "./Dot";

const QuestionBox = ({ question, bgColor }) => {
	const textRef = useRef(null);
	const [showSeeMore, setShowSeeMore] = useState(false);

	useEffect(() => {
		if (textRef.current) {
			const lineHeight = parseInt(
				window.getComputedStyle(textRef.current).lineHeight,
				10
			);
			const maxHeight = lineHeight * 5; // 5 lines
			if (textRef.current.scrollHeight > maxHeight) {
				setShowSeeMore(true);
			}
		}
	}, [question]);

	return (
		<div className="question-box" style={{ backgroundColor: bgColor }}>
			<p ref={textRef} className="question-box__text">
				{question.question}
			</p>
			{showSeeMore && <span className="see-more">Xem thêm</span>}
			<div className="dots">
				{[...Array(9)].map((_, index) => (
					<Dot key={index} />
				))}
			</div>
		</div>
	);
};

QuestionBox.propTypes = {
	question: PropTypes.object.isRequired,
	bgColor: PropTypes.string.isRequired,
};

export default QuestionBox;
