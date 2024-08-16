import { useEffect, useState } from "react";
import QuestionBox from "./QuestionBox";
import Loader from "./Loader";
import { MainAPI } from "../MainAPI";

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

	useEffect(() => {
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

		fetchQuestions();
	}, []);

	return (
		<div className="question-container">
			{isLoading && <Loader />}
			{!isLoading && error && <p>{error}</p>}
			{!isLoading &&
				!error &&
				questions.map((question, index) => (
					<QuestionBox
						key={index}
						question={question}
						bgColor={colors[index % colors.length]}
					/>
				))}
		</div>
	);
};

export default QuestionContainer;
