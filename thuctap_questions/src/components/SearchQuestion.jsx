// // import React, { useState } from 'react';
// // import PropTypes from 'prop-types';
// // import '../style/search_question.css'

// // const SearchQuestion_Modal = ({ questions, onClose }) => {
// //     const [isShowAnswer, setShowAnswer] = useState(false);
// //     return (
// //         <div>

// //             <div class="relative p-4 w-full max-w-md max-h-full">
// //                 <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
// //                     <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
// //                         <h3 class="text-lg font-semibold dark:text-white">
// //                             Open positions
// //                         </h3>
// //                         {isShowAnswer === true &&
// //                             <i class="fas fa-times-circle" style={{ color: '#FFD43B', fontSize: '30px', marginBottom: '10px', float: 'right' }}></i>

// //                         }
// //                         <i class="fas fa-times-circle" style={{ color: '#f31b1b', fontSize: '30px', marginBottom: '10px', float: 'right' }}></i>
// //                     </div>
// //                     <div class="p-4 md:p-5">
// //                         <ul class="space-y-4 mb-4">
// //                             {

// //                                 questions.map((item) => (
// //                                     <li key={item.id}>
// //                                         <input type="radio" id={`job-${item.id}`} name="job" value={`job-${item.id}`} className="hidden peer" required />
// //                                         <label htmlFor={`job-${item.id}`} className="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
// //                                             <div className="block">
// //                                                 <div className="w-full text-lg font-semibold" style={{ position: 'relative' }}>{item.question}</div>
// //                                                 <i class="fas fa-sun" style={{ fontSize: '20px', position: 'absolute', color: 'black', top: '40px', right: '100px' }}></i>
// //                                                 <div className="w-full dark:text-gray-400">{item.answer}</div>
// //                                             </div>
// //                                             <svg className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" /></svg>
// //                                         </label>
// //                                     </li>
// //                                 ))
// //                             }
// //                         </ul>

// //                     </div>
// //                 </div>
// //             </div>

// //         </div>
// //     );
// // }

// // SearchQuestion_Modal.propTypes = {
// //     questions: PropTypes.arrayOf(PropTypes.shape({
// //         id: PropTypes.string.isRequired,
// //         question: PropTypes.string.isRequired,
// //         // other props
// //     })),
// //     onClose: PropTypes.func.isRequired
// // };

// // export default SearchQuestion_Modal;
// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import '../style/search_question.css';

// const SearchQuestion_Modal = ({ questions, onClose }) => {
//     const [showAnswerForId, setShowAnswerForId] = useState(null);

//     const toggleAnswer = (id) => {
//         if (showAnswerForId === id) {
//             setShowAnswerForId(null); // Hide answer if already shown
//         } else {
//             setShowAnswerForId(id); // Show answer for this id
//         }
//     };

//     return (
//         <div>
//             <div className="relative p-4 w-full max-w-md max-h-full">
//                 <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                     <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                         <h3 className="text-lg font-semibold dark:text-white">
//                             Questions
//                         </h3>
//                         <i class="fas fa-times-circle" style={{ color: '#f31b1b', fontSize: '30px', marginBottom: '10px', float: 'right', cursor: 'pointer' }}
//                             onClick={onClose}
//                         ></i>
//                     </div>
//                     <div className="p-4 md:p-5">
//                         <ul className="space-y-4 mb-4">
//                             {questions.map((item) => (
//                                 <li key={item.id}>
//                                     <input
//                                         type="radio"
//                                         id={`job-${item.id}`}
//                                         name="job"
//                                         value={`job-${item.id}`}
//                                         className="hidden peer"
//                                         required
//                                     />
//                                     <label
//                                         htmlFor={`job-${item.id}`}
//                                         className="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
//                                     >
//                                         <div className="block">
//                                             <div
//                                                 className="w-full text-lg font-semibold"
//                                                 style={{ position: 'relative', color: 'blue' }}
//                                             >
//                                                 {item.question}
//                                             </div>
//                                             {showAnswerForId === item.id ? (
//                                                 <>
//                                                     <i
//                                                         className="fab fa-medapps"
//                                                         style={{
//                                                             fontSize: '30px',
//                                                             position: 'absolute',
//                                                             color: 'orange',
//                                                             top: '32px',
//                                                             right: '100px'
//                                                         }}
//                                                         onClick={() => toggleAnswer(item.id)}
//                                                     ></i>
//                                                     <div className="w-full" style={{ color: 'black', marginTop: '10px' }}>
//                                                         <i className="far fa-hand-point-right" style={{ color: '#ec27a4', marginRight: '5px' }}></i>{item.answer}

//                                                     </div>
//                                                 </>
//                                             ) : (
//                                                 <i
//                                                     className="fab fa-medapps"
//                                                     style={{
//                                                         fontSize: '30px',
//                                                         position: 'absolute',
//                                                         color: 'black',
//                                                         top: '32px',
//                                                         right: '100px'
//                                                     }}
//                                                     onClick={() => toggleAnswer(item.id)}
//                                                 ></i>
//                                             )}
//                                         </div>
//                                         <svg
//                                             className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
//                                             aria-hidden="true"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 14 10"
//                                         >
//                                             <path
//                                                 stroke="currentColor"
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M1 5h12m0 0L9 1m4 4L9 9"
//                                             />
//                                         </svg>
//                                     </label>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div >
//     );
// };

// SearchQuestion_Modal.propTypes = {
//     questions: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             question: PropTypes.string.isRequired,
//             answer: PropTypes.string.isRequired
//         })
//     ),
//     onClose: PropTypes.func.isRequired
// };

// export default SearchQuestion_Modal;



import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/search_question.css';

const SearchQuestion_Modal = ({ questions, onClose }) => {
    const [showAnswerForId, setShowAnswerForId] = useState(null);

    const toggleAnswer = (id) => {
        if (showAnswerForId === id) {
            setShowAnswerForId(null); // Hide answer if already shown
        } else {
            setShowAnswerForId(id); // Show answer for this id
        }
    };

    return (
        <div>
            <div className="relative p-4 w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-lg font-semibold dark:text-white">
                            Questions
                        </h3>
                        <i
                            className="fas fa-times-circle"
                            style={{
                                color: '#f31b1b',
                                fontSize: '30px',
                                marginBottom: '10px',
                                float: 'right',
                                cursor: 'pointer'
                            }}
                            onClick={onClose}
                        ></i>
                    </div>
                    <div className="p-4 md:p-5">
                        {questions.length === 0 ? (
                            <div className="text-center dark:text-gray-300" style={{ fontSize: '20px', color: 'black' }}>
                                <i class="far fa-tired"></i> Rất tiếc, không tìm thấy câu hỏi nào!
                            </div>
                        ) : (
                            <ul className="space-y-4 mb-4">
                                {questions.map((item) => (
                                    <li key={item.id}>
                                        <input
                                            type="radio"
                                            id={`job-${item.id}`}
                                            name="job"
                                            value={`job-${item.id}`}
                                            className="hidden peer"
                                            required
                                        />
                                        <label
                                            htmlFor={`job-${item.id}`}
                                            className="inline-flex items-center justify-between w-full p-5 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500"
                                        >
                                            <div className="block">
                                                <div
                                                    className="w-full text-lg font-semibold"
                                                    style={{
                                                        position: 'relative',
                                                        color: 'blue'
                                                    }}
                                                >
                                                    {item.question}
                                                </div>
                                                {showAnswerForId === item.id ? (
                                                    <>
                                                        <i
                                                            className="fab fa-medapps"
                                                            style={{
                                                                fontSize: '30px',
                                                                position: 'absolute',
                                                                color: 'orange',
                                                                top: '32px',
                                                                right: '100px'
                                                            }}
                                                            onClick={() =>
                                                                toggleAnswer(item.id)
                                                            }
                                                        ></i>
                                                        <div
                                                            className="w-full"
                                                            style={{
                                                                color: 'black',
                                                                marginTop: '10px'
                                                            }}
                                                        >
                                                            <i
                                                                className="far fa-hand-point-right"
                                                                style={{
                                                                    color: '#ec27a4',
                                                                    marginRight: '5px'
                                                                }}
                                                            ></i>
                                                            {item.answer}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <i
                                                        className="fab fa-medapps"
                                                        style={{
                                                            fontSize: '30px',
                                                            position: 'absolute',
                                                            color: 'black',
                                                            top: '32px',
                                                            right: '100px'
                                                        }}
                                                        onClick={() =>
                                                            toggleAnswer(item.id)
                                                        }
                                                    ></i>
                                                )}
                                            </div>
                                            <svg
                                                className="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 10"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                                />
                                            </svg>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
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
            answer: PropTypes.string.isRequired
        })
    ),
    onClose: PropTypes.func.isRequired
};

export default SearchQuestion_Modal;
