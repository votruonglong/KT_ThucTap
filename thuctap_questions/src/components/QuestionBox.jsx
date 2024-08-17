import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import Dot from "./Dot";
import ShowQuestionModal from "./ShowQuestionModal";
import EditQuestionModal from "./EditQuestionModal";

const QuestionBox = ({ question, bgColor, onDelete }) => {
	const textRef = useRef(null);
	const [showSeeMore, setShowSeeMore] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

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

	const handleBoxClick = () => {
		setIsModalOpen(true);
		document.body.classList.add("no-scroll");
	};

	const handleEditButtonClick = (event) => {
		event.stopPropagation();
		setIsEditModalOpen(true);
		document.body.classList.add("no-scroll");
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		document.body.classList.remove("no-scroll");
	};

	const handleCloseEditModal = () => {
		setIsEditModalOpen(false);
		document.body.classList.remove("no-scroll");
	};

	const handleDeleteClick = (event) => {
		event.stopPropagation();
		onDelete(question.id);
	};

	return (
		<>
			<div
				className="question-box"
				style={{ backgroundColor: bgColor }}
				onClick={handleBoxClick}
			>
				<span
					className="edit-btn-cover"
					onClick={handleEditButtonClick}
				>
					<button className="edit-btn">
						Edit
						<svg className="edit-icon" viewBox="0 0 512 512">
							<path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
						</svg>
					</button>
				</span>
				<span className="del-btn-cover" onClick={handleDeleteClick}>
					<button className="del-btn">
						<svg viewBox="0 0 448 512" className="del-icon">
							<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
						</svg>
					</button>
				</span>
				<p ref={textRef} className="question-box__text">
					{question.question}
				</p>
				{showSeeMore && <span className="see-more">Xem thêm</span>}
				<div className="dots">
					{[...Array(9)].map((_, index) => (
						<Dot key={index} />
					))}
				</div>
				<span
					className="heart-btn-cover"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="heart-btn" title="Like">
						<input
							type="checkbox"
							className="checkbox"
							id="Give-It-An-Id"
						/>
						<div className="heart-icon-cover">
							<svg
								viewBox="0 0 24 24"
								className="heart-icon-outline"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
							</svg>
							<svg
								viewBox="0 0 24 24"
								className="heart-icon-filled"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
							</svg>
							<svg
								className="heart-icon-celebrate"
								width={100}
								height={100}
								xmlns="http://www.w3.org/2000/svg"
							>
								<polygon points="10,10 20,20" />
								<polygon points="10,50 20,50" />
								<polygon points="20,80 30,70" />
								<polygon points="90,10 80,20" />
								<polygon points="90,50 80,50" />
								<polygon points="80,80 70,70" />
							</svg>
						</div>
					</div>
				</span>
			</div>
			{isModalOpen && (
				<ShowQuestionModal
					question={question.question}
					onClose={handleCloseModal}
				/>
			)}
			{isEditModalOpen && (
				<EditQuestionModal
					question={question.question}
					onClose={handleCloseEditModal}
				/>
			)}
		</>
	);
};

QuestionBox.propTypes = {
	question: PropTypes.object.isRequired,
	bgColor: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired,
};

export default QuestionBox;
