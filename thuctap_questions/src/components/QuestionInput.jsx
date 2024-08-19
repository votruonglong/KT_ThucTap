import { useState } from "react";
import PropTypes from "prop-types";

const QuestionForm = ({ addQuestion }) => {
	const [question, setQuestion] = useState("");
	const [err, setErr] = useState("");
	const [isSubmit, setIsSubmit] = useState(false);

	const handleInput = (e) => {
		const value = e.target.value;
		if (value.length > 200) {
			setErr("Bạn đã nhập quá số lượng ký tự cho phép");
		} else {
			setErr("");
			setQuestion(value);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (question.length <= 200 && !isSubmit) {
			setIsSubmit(true);
			await addQuestion(question);
			setQuestion("");
			setErr("");
			setIsSubmit(false);
		} else {
			setErr("Bạn đã nhập quá số lượng ký tự cho phép");
		}
	};

	return (
		<div>
			<form id="questionForm" onSubmit={handleSubmit}>
				<div id="questionFormStyle">
					<input
						type="text"
						id="questionInput"
						name="question"
						placeholder="Nhập câu hỏi của bạn"
						value={question}
						onChange={handleInput}
						required
						disabled={isSubmit}
					/>
					<button id="button" type="submit" disabled={isSubmit}>
						{isSubmit ? "Đang gửi..." : "Gửi"}
					</button>
				</div>
			</form>
			{err && <p id="errorMessage">{err}</p>}
		</div>
	);
};

QuestionForm.propTypes = {
	addQuestion: PropTypes.func,
};

export default QuestionForm;
