import React from 'react'
import { useDispatch } from 'react-redux'
import { updateAnswer } from '../services/answerService';



const AdminAnswerForm = ({ handleChange, text, questionId }) => {

    const dispatch = useDispatch();

    const handleInsert = (e) => {
        console.log(questionId, text)
        e.preventDefault();

        if (text.trim() === "") {
            alert("Câu trả lời không được để trống!");
            return;
        }

        dispatch(updateAnswer({ id: questionId, answer: text, isAnswer: true }));
    };

    return (
        <form className='form' onSubmit={handleInsert}>
            <p className='adminAnswerText'>REPLY</p>
            <textarea
                className="feedback-textarea"
                onChange={handleChange}
                value={text}
                placeholder='nhập câu trả lời ở đây'
                spellCheck={false}
                maxLength={150}
            />

            <div className='formButton'>
                <button type='submit'>
                    <span>Send</span>
                </button>
            </div>
        </form>
    )
}

export default AdminAnswerForm