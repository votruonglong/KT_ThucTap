import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateAnswer } from "../services/answerService";

const AdminAnswerForm = ({ handleChange, text, onClose, questionId, fetchQuestions }) => {
	const dispatch = useDispatch();

	const handleInsert = async (e) => {
		e.preventDefault();

		if (text.trim() === "") {
			alert("Câu trả lời không được để trống!");
			return;
		}

		try {
			await dispatch(updateAnswer({ id: questionId, answer: text, isAnswer: true }));
			onClose();
			await fetchQuestions();
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form className="admin-answer-form" onSubmit={handleInsert}>
			<p className="adminAnswerText">REPLY</p>
			<textarea
				className="feedback-textarea"
				onChange={handleChange}
				value={text}
				placeholder="nhập câu trả lời ở đây"
				spellCheck={false}
				maxLength={150}
			/>

			<div className="admin-answer-form-btn">
				<button type="submit">
					<span>Send</span>
				</button>
			</div>
		</form>
	);
};

AdminAnswerForm.propTypes = {
	handleChange: PropTypes.func.isRequired,
	text: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
	questionId: PropTypes.string.isRequired,
	fetchQuestions: PropTypes.func.isRequired,
};

export default AdminAnswerForm;
