import FooterMain from "./FooterMain";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/reducers/languageReducer";
import { LANGUAGES } from "../utils/constant";
import { FormattedMessage } from "react-intl";


const Support = () => {
	const language = useSelector((state) => state.language);

	const dispatch = useDispatch();
	const toggleLanguage = () => {
		const newLanguage = language === LANGUAGES.VI ? LANGUAGES.EN : LANGUAGES.VI;
		dispatch(changeLanguage(newLanguage));
	};

	return (
		<>
			<Header />
			<div>
				<span>{language === LANGUAGES.VI ? 'Tiếng Việt' : 'Tiếng Anh'}</span>
				<i
					className={`fas fa-toggle-${language === LANGUAGES.VI ? 'off' : 'on'}`}
					style={{
						color: language === LANGUAGES.VI ? "#DC091E" : "#63E6BE",
						margin: "0px 10px",
						fontSize: "30px",
						cursor: "pointer",
					}}
					onClick={toggleLanguage}
				></i>
			</div>

			<Accordion
				style={{
					marginBottom: "30px",
				}}
			>
				<AccordionPanel>
					<AccordionTitle>
						<FormattedMessage id="q1_flowbite" />
					</AccordionTitle>
					<AccordionContent>
						<p className="mb-2 text-gray-500 dark:text-gray-400">
							<FormattedMessage id="an1_flowbite" />
						</p>
					</AccordionContent>
				</AccordionPanel>
				<AccordionPanel>
					<AccordionTitle>
						<FormattedMessage id="q2_flowbite" />
					</AccordionTitle>
					<AccordionContent>
						<p className="mb-2 text-gray-500 dark:text-gray-400">
							<FormattedMessage id="an2_flowbite" />
						</p>
					</AccordionContent>
				</AccordionPanel>
				<AccordionPanel>
					<AccordionTitle>
						<FormattedMessage id="q3_flowbite" />
					</AccordionTitle>
					<AccordionContent>
						<p className="mb-2 text-gray-500 dark:text-gray-400">
							<FormattedMessage id="an3_flowbite" />
						</p>
					</AccordionContent>
				</AccordionPanel>
			</Accordion>

			<FooterMain />
		</>
	);
};

export default Support;
