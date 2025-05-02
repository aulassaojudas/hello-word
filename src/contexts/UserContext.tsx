import { createContext, useState, useContext, ReactNode } from 'react';

interface UserContextType {
    username: string;
    login: (name: string) => void;
    logout: () => void;
}

// Criar o contexto
const UserContext = createContext<UserContextType | undefined>(undefined);

// Provider
export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [username, setUsername] = useState('');
    const login = (name: string) => setUsername(name);
    const logout = () => setUsername('');

    return (
        <UserContext.Provider value={{ username, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

// Hook para usar o contexto
export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser deve ser usado dentro de um UserProvider');
    }
    return context;
};
