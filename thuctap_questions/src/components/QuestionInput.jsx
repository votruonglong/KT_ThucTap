import React, { useState } from 'react';

const QuestionForm = ({ addQuestion }) => {
    const [question, setQuestion] = useState('');
    const [err, setErr] = useState('');
    const [isSubmit, setIsSubmitting] = useState(false);

    const handleInput = (e) => {
        const value = e.target.value;
        if (value.length > 200) {
            setErr('Bạn đã nhập quá số lượng ký tự cho phép');
        } else {
            setErr('');
            setQuestion(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (question.length <= 200 && !isSubmit) {
            setIsSubmitting(true);
            await addQuestion(question);
            setQuestion('');
            setErr('');
            setIsSubmitting(false);
        } else {
            setErr('Bạn đã nhập quá số lượng ký tự cho phép');
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
                    maxLength={200}
                    value={question}
                    onChange={handleInput}
                    required
                    disabled={isSubmit} 
                />
                <button id="button" type="submit" disabled={isSubmit}>
                    {isSubmit ? 'Đang gửi...' : 'Gửi'}
                </button>
            </form>
            {err && <p id="errorMessage">{err}</p>}
        </div>
    );
};

export default QuestionForm;
