import "../style/header.scss";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchQuestion_Modal from "./SearchQuestion";
import { debounce } from "lodash";
import { MainAPI } from "../MainAPI";
import Loader from "./Loader";
import { FormattedMessage } from "react-intl";
import { LANGUAGES } from "../utils/constant";
import { useSelector } from "react-redux";

const Header = () => {
	const [listQuestions, setListQuestions] = useState([]);
	const [filteredQuestions, setFilteredQuestions] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [userName, setUserName] = useState("");

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	useEffect(() => {
		fetchQuestions();
		const token = localStorage.getItem("token"); //
		const email = localStorage.getItem("userEmail");
		const emailName = email ? email.split("@")[0] : "";
		setIsAuthenticated(!!token);
		setUserName(emailName);
	}, []);

	const navigate = useNavigate();

	const handleredirect_Login = () => {
		navigate("/Login");
	};

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("userEmail");
		setIsAuthenticated(false);
		setUserName("");
		navigate("/Login");
	};

	const fetchQuestions = async () => {
		try {
			const response = await fetch(MainAPI);
			if (!response.ok) {
				console.log("No data");
				return;
			}
			const data = await response.json();
			setListQuestions(data);
		} catch (error) {
			console.error("Lỗi khi fetch dữ liệu:", error);
		}
	};

	const removeAccents = (str) => {
		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	};

	const handleOnsearch = debounce(async (event) => {
		const term = event.target.value.trim().toLowerCase();

		if (term) {
			setIsLoading(true); // Bắt đầu hiển thị Loader
		}

		try {
			if (term) {
				const result = listQuestions.filter((item) =>
					removeAccents(item.question).toLowerCase().includes(removeAccents(term))
				);
				setFilteredQuestions(result.length ? result : []);
				setIsModalOpen(true);
			} else {
				setFilteredQuestions(listQuestions);
				setIsModalOpen(false);
			}
		} catch (error) {
			console.error("Lỗi khi tìm kiếm:", error);
		} finally {
			if (term) {
				setIsLoading(false);
				console.log("Loading ended");
			}
		}
	}, 300);

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const [isLoading, setIsLoading] = useState(false);
	{
		isLoading && <Loader />;
	}
	const language = useSelector((state) => state.language);
	return (
		<>
			{!isLoading && (
				<div className="home-header-container">
					<div className="header-left">
						<Link to={"/"}>
							<img className="header-logo" src={logo} alt="Logo" />
						</Link>
					</div>
					<div className="header-center">
						<div className="header-center-input-container">
							<input
								placeholder={language === LANGUAGES.VI ? "Tim kiếm" : "Search"}
								id="input"
								className="header-center-input"
								name="text"
								type="text"
								onChange={(event) => handleOnsearch(event)}
							/>
						</div>
					</div>
					<div className="header-right">
						<div className="hamburger-menu" onClick={toggleMenu}>
							<i className="fas fa-bars"></i>
						</div>
						<div className={`menu-items ${menuOpen ? "open" : ""}`}>
							<Link to={"/support"} className="header-right-link support">
								<i className="fas fa-question-circle">
									<span>
										<FormattedMessage id="support" />
									</span>
								</i>
							</Link>
							{isAuthenticated ? (
								<div className="header-right-link dropdown">
									<span>
										<FormattedMessage id={`${userName}`} />
									</span>
								</div>
							) : (
								<span className="login-link" onClick={handleredirect_Login}>
									Login
								</span>
							)}
							{isAuthenticated && (
								<div className="logout" onClick={handleLogout}>
									Logout&nbsp;<i className="fas fa-sign-out-alt"></i>
								</div>
							)}
						</div>
					</div>
				</div>
			)}
			{isLoading && <Loader />} {/* Show loader when loading */}
			{isModalOpen && !isLoading && (
				<SearchQuestion_Modal questions={filteredQuestions} onClose={closeModal} />
			)}
		</>
	);
};
export default Header;
