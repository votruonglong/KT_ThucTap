import PropTypes from "prop-types";

const ShowQuestionModal = ({ question, onClose }) => {
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div className="modal-overlay" onClick={handleOverlayClick}>
			<div className="modal-content">
				<button className="close-button" onClick={onClose}>
					<span className="text">Đóng</span>
					<span className="icon">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
						>
							<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
						</svg>
					</span>
				</button>

				<h2>Câu hỏi</h2>
				<p>{question.question}</p>
				{question.isAnswer && (
					<div>
						<h2 style={{ color: "limegreen", fontWeight: "bold" }}>
							Câu trả lời
						</h2>
						<p
							style={{
								padding: "5px 10px",
								border: "2px dotted limegreen",
								borderRadius: "5px",
								fontWeight: "600",
								background: "#eee",
							}}
						>
							{question.answer}
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

ShowQuestionModal.propTypes = {
	question: PropTypes.object.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default ShowQuestionModal;
