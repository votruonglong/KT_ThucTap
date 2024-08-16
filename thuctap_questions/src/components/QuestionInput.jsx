import React from 'react';

const QuestionForm = () => {
    return (
        <div>
            <form id="questionForm">
                <input
                    type="text"
                    id="questionInput"
                    name="question"
                    placeholder="Nhập câu hỏi của bạn"  
                    // required
                />
                <button id="submitButton" type="submit">Gửi</button>
            </form>
        </div>
    );
}
export default QuestionForm;