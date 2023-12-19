import { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, isEmailVerified, setIsEmailVerified }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
