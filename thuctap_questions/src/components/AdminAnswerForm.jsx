import React from 'react'

const AdminAnswerForm = ({ handleChange, text }) => {
    return (
        <form className='form'>
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
                <button>
                    <span>Send</span>
                </button>
            </div>
        </form>
    )
}

export default AdminAnswerForm