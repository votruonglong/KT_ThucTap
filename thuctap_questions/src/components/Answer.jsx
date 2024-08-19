import PropTypes from "prop-types";
import { useState } from "react";
import AdminAnswer from "./AdminAnswer";
import AdminAnswerForm from "./AdminAnswerForm";
import UserQuestion from "./UserQuestion";

const Answer = ({ show, onClose, questionId, answer, question, fetchQuestions }) => {
	const [text, setText] = useState("");
	const showHideClassName = show ? "unHidden" : "";
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleChange = (e) => {
		const newText = e.target.value;
		setText(newText);
	};

	return (
		<>
			{show && (
				<div className="modal-overlay" onClick={handleOverlayClick}>
					<div className={`${showHideClassName} answerContainer`}>
						<div className="modalContent">
							<div className="answerHeader">
								<h3>Answer</h3>
								<button type="button" className="close-button" onClick={onClose}>
									<span className="text">Đóng</span>
									<span className="icon">
										<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
											<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
										</svg>
									</span>
								</button>
							</div>
							<div className="answerContent">
								<UserQuestion question={question} />
								<div className="adminAnswer">
									<AdminAnswer answer={answer} />
									<AdminAnswerForm
										fetchQuestions={fetchQuestions}
										handleChange={handleChange}
										onClose={onClose}
										text={text}
										questionId={questionId}
									/>
								</div>
							</div>
							<div className="answerFooter">
								<p>Nhập câu trả lời</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

Answer.propTypes = {
	show: PropTypes.bool,
	onClose: PropTypes.func,
	questionId: PropTypes.string,
	answer: PropTypes.string,
	question: PropTypes.string,
	fetchQuestions: PropTypes.func,
};

export default Answer;
