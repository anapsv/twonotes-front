import ResetCSS from './assets/ResetCSS';
import GlobalStyle from './assets/GlobalStyle';
import UserContext from './contexts/UserContext';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home.js';

export default function App() {

    const [userInfo, setUserInfo] = useState();

    return (
        <>
            <UserContext.Provider value={ { userInfo, setUserInfo } } >
                <ResetCSS />
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={ <Home /> } />
                    </Routes>
                </BrowserRouter>
            </UserContext.Provider>
        </>
    );
}
