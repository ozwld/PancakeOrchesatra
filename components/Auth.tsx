import fbApp from "firebase/app";
import { FC, createContext, useEffect, useState } from "react";
import firebase from "../utils/Firebase";

type AuthContextProps = {
  currentUser: fbApp.User | null | undefined;
};

const AuthContext = createContext<AuthContextProps>({ currentUser: undefined });
const AuthProvider: FC = ({ children }) => {
  const [currentUser, setCurrentUser] =
    useState<fbApp.User | null | undefined>(undefined);

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    firebase.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  //   ここで firebase にログインしてるかチェック
  if (!currentUser) {
    return <></>;
  }
  return (
    <AuthContext.Provider value={{ currentUser: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
