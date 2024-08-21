import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/search_question.css';

const SearchQuestion_Modal = ({ questions, onClose }) => {
    const [showAllAnswers, setShowAllAnswers] = useState(false);

    const toggleAllAnswers = () => {
        setShowAllAnswers(prevState => !prevState);
    };

    //Arrange questions with answers first
    const sortedQuestions = [...questions].sort((a, b) => {
        if (a.answer && !b.answer) {
            return -1;
        }
        if (!a.answer && b.answer) {
            return 1;
        }
        return 0;
    });

    return (
        <div className="relative p-4 w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-lg font-semibold dark:text-white">
                        Questions
                    </h3>
                    <div className="flex items-center">
                        <i
                            className="fab fa-medapps"
                            style={{
                                fontSize: '30px',
                                color: showAllAnswers ? 'orange' : 'black',
                                cursor: 'pointer',
                                marginRight: '20px'
                            }}
                            onClick={toggleAllAnswers}
                        ></i>
                        <i
                            className="fas fa-times-circle"
                            style={{
                                color: '#f31b1b',
                                fontSize: '30px',
                                cursor: 'pointer'
                            }}
                            onClick={onClose}
                        ></i>
                    </div>
                </div>
                <div className="p-4 md:p-5">
                    {sortedQuestions.length === 0 ? (
                        <div className="text-center dark:text-gray-300" style={{ fontSize: '20px', color: 'black' }}>
                            <i className="far fa-tired"></i> Rất tiếc, không tìm thấy câu hỏi nào!
                        </div>
                    ) : (
                        <ul className="space-y-4 mb-4">
                            {sortedQuestions.map((item) => (
                                <li key={item.id} className="relative">
                                    <label
                                        className="block cursor-not-allowed p-5 bg-white border border-gray-200 rounded-lg dark:bg-gray-600 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-500"
                                    >
                                        <div className="w-full text-lg font-semibold" style={{ color: 'blue' }}>
                                            {item.question}
                                        </div>
                                        {showAllAnswers ? (
                                            item.answer ? (
                                                <div className="mt-2 text-black">
                                                    <i
                                                        className="far fa-hand-point-right"
                                                        style={{
                                                            color: '#ec27a4',
                                                            marginRight: '5px'
                                                        }}
                                                    ></i>
                                                    {item.answer}
                                                </div>
                                            ) : (
                                                <div className="mt-2 text-gray-600 italic">
                                                    <i className="far fa-question-circle" style={{ color: 'red', marginRight: '5px' }}></i>
                                                    Chưa có câu trả lời!
                                                </div>
                                            )
                                        ) : null}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

SearchQuestion_Modal.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            question: PropTypes.string.isRequired,
            answer: PropTypes.string
        })
    ).isRequired,
    onClose: PropTypes.func.isRequired
};

export default SearchQuestion_Modal;


