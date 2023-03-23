import React, { useCallback, useMemo, useState } from "react";
import UserDataContext from './UserDataContext';

export default function UserDataProvider({ children }) {
  const [userData, setUserData] = useState({
    id: '',
    name: '',
    pts: '',
  });

  const setData = useCallback((params) => {
    setUserData({
      ...userData,
      id: params,
    })
  }, [userData])

  const contextValue = useMemo(() => ({
    userData,
    setUserData,
    setData,
  }), [userData, setUserData, setData])

  return (
    <UserDataContext.Provider value={ contextValue }>
      { children }
    </UserDataContext.Provider>
  )
}