import React from 'react'
import { useState } from 'react';
import AdminAnswer from './AdminAnswer';
import AdminAnswerForm from './AdminAnswerForm';
import UserQuestion from './UserQuestion';

const Answer = ({ show, onClose, questionId, answer, question }) => {
    const [text, setText] = useState("")
    const showHideClassName = show ? "unHidden" : "";



    const handleChange = (e) => {
        const newText = e.target.value;
        setText(newText);
    };

    return (
        <>
            {show && (
                <div className='modal-overlay'>
                    <div className={`${showHideClassName} answerContainer`}>
                        <div className='modalContent'>
                            <div className='answerHeader'>
                                <h3>Answer</h3>
                                <button onClick={onClose}>X</button>
                            </div>
                            <div className='answerContent'>
                                <UserQuestion question={question} />
                                <div className='adminAnswer'>
                                    <AdminAnswer answer={answer} />
                                    <AdminAnswerForm handleChange={handleChange} text={text} questionId={questionId} />
                                </div>
                            </div>
                            <div className='answerFooter'>
                                <p>Nhập câu trả lời</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>


    )
}

export default Answer