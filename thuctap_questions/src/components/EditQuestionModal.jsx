import PropTypes from "prop-types";

const EditQuestionModal = ({ question, onClose }) => {
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<div className="modal-overlay" onClick={handleOverlayClick}>
			<form className="modal-content">
				<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
					<h2>Chỉnh sửa</h2>
					<button className="close-button" onClick={onClose}>
						<span className="text">Đóng</span>
						<span className="icon">
							<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
								<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
							</svg>
						</span>
					</button>
				</div>
				<textarea
					style={{
						width: "100%",
						maxWidth: "100%",
						minHeight: "120px",
						fontSize: "1rem",
						padding: "0.5rem",
						borderRadius: "5px",
						margin: "10px 0",
					}}
					name="question-edit"
					id="question-edit"
				>
					{question}
				</textarea>
				<div className="save-btn-cover">
					<button type="button" className="cancel-btn" onClick={onClose}>
						<span>Hủy</span>
					</button>
					<button type="submit" className="save-btn">
						<div>
							<div className="save-btn-icon-cover">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18}>
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										fill="currentColor"
										d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
									/>
								</svg>
							</div>
						</div>
						<span>Lưu</span>
					</button>
				</div>
			</form>
		</div>
	);
};

EditQuestionModal.propTypes = {
	question: PropTypes.string.isRequired,
	onClose: PropTypes.func.isRequired,
};

export default EditQuestionModal;
