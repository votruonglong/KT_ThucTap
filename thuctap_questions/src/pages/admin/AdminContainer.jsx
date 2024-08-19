import React from 'react'
import QuestionContainer from "../../components/QuestionContainer";
import QuestionForm from "../../components/QuestionInput"

const AdminContainer = () => {
    return (

        <div>
            <QuestionContainer isAdmin={true} />
        </div>
    )
}

export default AdminContainer