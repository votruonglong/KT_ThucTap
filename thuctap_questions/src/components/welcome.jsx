import React from 'react';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../store/reducers/languageReducer'; // Đảm bảo đường dẫn đúng

const WelcomeComponent = () => {
    const dispatch = useDispatch();

    const handleLanguageChange = (language) => {
        dispatch(changeLanguage(language));
    };

    return (
        <div>
            <h1>
                <FormattedMessage id="welcome" />
                hello bạn nha
                <FormattedMessage id="goodbye" />
            </h1>
            <button className='btn btn-primary' onClick={() => handleLanguageChange('vi')}>Việt Nam</button>
            <button className='btn btn-danger' onClick={() => handleLanguageChange('en')}>English</button>
        </div>
    );
};

export default WelcomeComponent;
