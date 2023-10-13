import React, { useState, createContext, useContext, useEffect } from 'react';
import cookie from 'react-cookies';

import supabase from '../../config/supabase.config';

export const UserContext = createContext();

export function useAuth() {
  return useContext(UserContext);
}

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      // console.log('user context', user);
      setUser(user);
      cookie.save('user', user);
    } catch (error) {
      console.log(error.response);
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      setUser(null);
      cookie.save('token', null);
    } catch (error) {
      console.error(error);
    }
  };

  const value = { user, setUser, logout };

  useEffect(() => {
    getUser();
  }, []);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
