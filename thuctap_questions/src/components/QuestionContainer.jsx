import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import QuestionBox from "./QuestionBox";
import QuestionForm from "./QuestionInput";
import Loader from "./Loader";
import { MainAPI } from "../MainAPI";
import { toast } from "react-toastify";
import Answer from "./Answer";
import RadioInputs from "./RadioInputs";

const QuestionContainer = ({ isAdmin }) => {
	const [questions, setQuestions] = useState([]);
	const [filteredQuestions, setFilteredQuestions] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const colors = ["var(--bg-01)", "var(--bg-02)", "var(--bg-03)", "var(--bg-04)", "var(--bg-05)"];

	// Fetch questions from API
	const fetchQuestions = async () => {
		try {
			setIsLoading(true);
			setError("");

			const response = await fetch(MainAPI);

			if (!response.ok) throw new Error("Failed to fetch questions");

			const data = await response.json();

			// Sort data by id in descending order
			const sortedData = data.sort((a, b) => b.id - a.id);

			setQuestions(sortedData);
			setFilteredQuestions(sortedData);
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

	// Handle delete question
	const handleDelete = (id) => {
		const questionToDelete = questions.find((question) => question.id === id);

		if (isAdmin && questionToDelete.isAnswer) {
			toast.info("Bạn không thể xóa câu hỏi này vì đã có người trả lời.", {
				autoClose: 2000,
			});
			return;
		}

		const confirmed = window.confirm("Bạn có chắc chắn muốn xóa câu hỏi này không?");

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

	// ADD QUESTION
	const handleAddQuestion = async (newQuestion) => {
		const newQuestionObject = {
			question: newQuestion,
			numberOfLikes: 0,
			answer: "",
			isAnswer: false,
		};

		try {
			const response = await fetch(MainAPI, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(newQuestionObject),
			});

			if (!response.ok) {
				throw new Error("Thêm câu hỏi thất bại");
			}
			toast.success("Thêm câu hỏi thành công!!", { autoClose: 2000 });

			fetchQuestions();
		} catch (error) {
			console.error("Lỗi khi thêm câu hỏi:", error);
			toast.error("Xảy ra lỗi khi thêm câu hỏi.", { autoClose: 2000 });
		}
	};

	// const sortedQuestions = [...questions].sort((a, b) => b.id - a.id);

	return (
		<div>
			{!isAdmin && <QuestionForm addQuestion={handleAddQuestion} />}
			<div className="question-container">
				{/* Pass questions and setFilteredQuestions to RadioInputs component */}
				<RadioInputs questions={questions} setFilteredQuestions={setFilteredQuestions} />
				{isLoading && <Loader />}
				{!isLoading && error && <p>{error}</p>}
				{!isLoading &&
					!error &&
					filteredQuestions.map((question, index) => (
						<QuestionBox
							key={index}
							fetchQuestions={fetchQuestions}
							question={question}
							bgColor={colors[index % colors.length]}
							onDelete={handleDelete}
							isAdmin={isAdmin}
						/>
					))}
			</div>
			<Answer />
		</div>
	);
};

QuestionContainer.propTypes = {
	isAdmin: PropTypes.bool,
};

export default QuestionContainer;
