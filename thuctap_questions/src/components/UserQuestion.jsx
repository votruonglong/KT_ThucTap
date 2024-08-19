import React from 'react'

const UserQuestion = ({ question }) => {
    return (
        <div>
            <div className='answerInfo'>
                <div className='answerInfoLeft'>
                    <div className='answerAvt'>
                        T
                    </div>
                    <div>
                        <h4>THỰC TẬP SINH</h4>
                        <span>10 phút trước</span>
                    </div>

                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                </svg>
            </div>
            <div className='userQuestion'>
                <p className='userText'>{question}</p>
                <div className='userQuestionButton'>
                    <a href="">REPLY</a>
                </div>

            </div>
        </div>
    )
}

export default UserQuestion