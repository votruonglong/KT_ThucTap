import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import Dot from "./Dot";
import ShowQuestionModal from "./ShowQuestionModal";
import EditQuestionModal from "./EditQuestionModal";
import axios from "axios";
import { MainAPI } from "../MainAPI";

const QuestionBox = ({ question, bgColor, onDelete }) => {
	const textRef = useRef(null);
	const [showSeeMore, setShowSeeMore] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const [likes, setLikes] = useState(question.numberOfLikes);

	// KIỂM TRA SỐ LƯỢNG DÒNG CỦA CÂU HỎI
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
		event.stopPropagation(); // Ngăn chặn sự kiện click lan truyền lên thẻ cha
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

	// Điều chỉnh số lượng like cho câu hỏi dùng axios put
	const handleLikeClick = async (event) => {
		event.stopPropagation();
		const newLikes = likes + 1;
		setLikes(newLikes);

		try {
			await axios.put(`${MainAPI}/${question.id}`, {
				numberOfLikes: newLikes,
			});
		} catch (error) {
			console.error("Failed to update likes", error);
		}
	};

	return (
		<>
			<div
				className="question-box"
				style={{ backgroundColor: bgColor }}
				onClick={handleBoxClick}
			>
				{/* ==== EDIT BUTTON ==== */}
				<span
					className="edit-btn-cover"
					onClick={handleEditButtonClick}
				>
					<button className="edit-btn">
						Sửa
						<svg className="edit-icon" viewBox="0 0 512 512">
							<path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
						</svg>
					</button>
				</span>
				{/* ==== DELETE BUTTON ==== */}
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
				{/* NẾU CÂU HỎI QUÁ DÀI SẼ THAY THẾ BẰNG DÒNG CHỮ NÀY */}
				{showSeeMore && <span className="see-more">Xem thêm</span>}
				<div className="dots">
					{[...Array(3)].map((_, index) => (
						<Dot key={index} />
					))}
				</div>
				{/* ==== HEART BUTTON ==== */}
				<button
					type="button"
					className="heart-btn"
					onClick={handleLikeClick}
				>
					<span className="heart-btn-left">
						<svg
							fill="white"
							viewBox="0 0 512 512"
							height="1em"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
						</svg>
						<span className="like">Like</span>
					</span>
					<span className="heart-btn-like">{likes}</span>
				</button>
			</div>
			{/* ==== SHOW MODAL ==== */}
			{isModalOpen && (
				<ShowQuestionModal
					question={question.question}
					onClose={handleCloseModal}
				/>
			)}
			{/* ==== EDIT MODAL ==== */}
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
