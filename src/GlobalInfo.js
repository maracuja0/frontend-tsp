// GlobalContext.js
import React, { createContext, useState, useContext } from 'react';

// Создаем контекст
const GlobalContext = createContext(undefined);

// Создаем провайдер для контекста
export const GlobalProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [creatorInfo, setCreatorInfo] = useState(null);

    return (
        <GlobalContext.Provider value={{ userInfo, setUserInfo, creatorInfo, setCreatorInfo }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Хук для использования контекста
export const useGlobalContext = () => useContext(GlobalContext);
