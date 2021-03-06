import React from 'react';

import UserContext from "./contexts/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ResetCss from "./styles/ResetCss";
import GlobalCss from "./styles/GlobalCss";

import Login from "./components/Login";
import Register from "./components/Register";
import Transactions from "./components/Transactions";
import Input from "./components/Input";
import Output from "./components/Output";
import Error from "./components/Error";

export default function App() {
    const [name, setName] = React.useState(getName);
    const [token, setToken] = React.useState(getToken);

    function getToken() {
        const localToken = localStorage.getItem('MyWallet-Token');
        if (localToken !== '' && localToken !== undefined && localToken !== null) return localToken;
        return '';
    }

    function getName() {
        const localname = localStorage.getItem('MyWallet-Name');
        if (localname !== undefined && localname !== null && localname !== '') return localname;
        return '';
    }

    return (
        <UserContext.Provider value={{ name, setName, token, setToken }}>
            <BrowserRouter>
                <ResetCss />
                <GlobalCss />
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/sign-up" element={<Register />} />
                    <Route path="/transactions" element={<Transactions />} />
                    <Route path="/input" element={<Input />} />
                    <Route path="/output" element={<Output />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}