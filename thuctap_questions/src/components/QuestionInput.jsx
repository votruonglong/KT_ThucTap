import React, { useState } from 'react';

const QuestionForm = () => {
    const [question, setQuestion] = useState('');
    const [err, setErr] = useState('');

    const handleInput = (e) => {
        const value = e.target.value;

        if (value.length >= 100) {
            setErr('Bạn đã nhập quá số lượng ký tự cho phép');
        } else {
            setErr('');
        }

        setQuestion(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (question.length <= 100) {
            console.log(question);
            setErr('');
        }
    };

    return (
        <div>
            <form id="questionForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="questionInput"
                    name="question"
                    placeholder="Nhập câu hỏi của bạn"
                    maxLength={100}
                    value={question}
                    onChange={handleInput}
                    required
                />
                <button id="button">
                Gửi
                </button>         
            </form>
            {err && <p id="errorMessage">{err}</p>}
        </div>
    );
};

export default QuestionForm;

