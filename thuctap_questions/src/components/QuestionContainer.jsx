import { useEffect, useState } from "react";
import QuestionBox from "./QuestionBox";
import Loader from "./Loader";
import { MainAPI } from "../MainAPI";
import { toast } from "react-toastify";
import Answer from "./Answer";

const QuestionContainer = () => {
	const [questions, setQuestions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const colors = [
		"var(--bg-01)",
		"var(--bg-02)",
		"var(--bg-03)",
		"var(--bg-04)",
		"var(--bg-05)",
	];

	const fetchQuestions = async () => {
		try {
			setIsLoading(true);
			setError("");

			const response = await fetch(MainAPI);

			if (!response.ok) throw new Error("Failed to fetch questions");

			const data = await response.json();

			setQuestions(data);
			setError("");
		} catch (error) {
			console.error(error);
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchQuestions();
	}, []);

	const handleDelete = (id) => {
		const confirmed = window.confirm(
			"Bạn có chắc chắn muốn xóa câu hỏi này không?"
		);

		if (confirmed) {
			fetch(`${MainAPI}/${id}`, {
				method: "DELETE",
			}).then(() => {
				toast.success("Xóa câu hỏi thành công!!", {
					autoClose: 2000,
				});
				fetchQuestions();
			});
		}
	};

	const sortedQuestions = [...questions].sort((a, b) => b.id - a.id);

	return (
		<div className="question">
			<div className="question-container">
				<span className="radio-inputs-cover">
					<div className="radio-inputs">
						<label className="radio">
							<input type="radio" name="radio" defaultChecked />
							<span className="name">Tất cả</span>
						</label>
						<label className="radio">
							<input type="radio" name="radio" />
							<span className="name">Chưa trả lời</span>
						</label>
						<label className="radio">
							<input type="radio" name="radio" />
							<span className="name">Đã trả lời</span>
						</label>
						<label className="radio">
							<input type="radio" name="radio" />
							<span className="name">
								<svg
									fill="red"
									viewBox="0 0 512 512"
									width="16"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
								</svg>
								<svg
									width="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16.5 16L18.5 14V21M16.5 21H20.5M20.5 7L18 10M7 21V3M7 3L3 7M7 3L11 7M21 5.5C21 6.88071 19.8807 8 18.5 8C17.1193 8 16 6.88071 16 5.5C16 4.11929 17.1193 3 18.5 3C19.8807 3 21 4.11929 21 5.5Z"
										stroke="#000000"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</label>
						<label className="radio">
							<input type="radio" name="radio" />
							<span className="name">
								<svg
									fill="red"
									viewBox="0 0 512 512"
									width="16"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
								</svg>
								<svg
									width="20"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7 3V21M7 21L3 17M7 21L11 17M16.5 16L18.5 14V21M16.5 21H20.5M20.5 7L18 10M21 5.5C21 6.88071 19.8807 8 18.5 8C17.1193 8 16 6.88071 16 5.5C16 4.11929 17.1193 3 18.5 3C19.8807 3 21 4.11929 21 5.5Z"
										stroke="#000000"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</label>
					</div>
				</span>
				{isLoading && <Loader />}
				{!isLoading && error && <p>{error}</p>}
				{!isLoading &&
					!error &&
					sortedQuestions.map((question, index) => (
						<QuestionBox
							key={index}
							question={question}
							bgColor={colors[index % colors.length]}
							onDelete={handleDelete}
						/>
					))}
			</div>
			<Answer />
		</div>

	);
};

export default QuestionContainer;
