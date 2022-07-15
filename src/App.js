import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResetCSS from './assets/ResetCSS';
import GlobalStyle from './assets/GlobalStyle';
import UserContext from './contexts/UserContext';
import { useState } from 'react';

export default function App() {

    const [userInfo, setUserInfo] = useState();

    return (
        <>
            <UserContext.Provider value={ { userInfo, setUserInfo } } >
                <ResetCSS />
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}