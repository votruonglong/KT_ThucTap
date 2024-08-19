import PropTypes from "prop-types";

const AdminAnswer = ({ answer }) => {
	console.log(answer);
	return (
		<div>
			<div className="adminAnswerInfo">
				<div className="answerInfoLeft">
					<div className="answerAvt">A</div>
					<div>
						<h4>ADMIN</h4>
						<span>2 phút trước</span>
					</div>
				</div>

				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
					<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
				</svg>
			</div>
			{answer != "" ? <p className="adminText">{answer}</p> : <p className="adminText">Chưa trả lời</p>}
		</div>
	);
};

AdminAnswer.propTypes = {
	answer: PropTypes.string.isRequired,
};

export default AdminAnswer;
