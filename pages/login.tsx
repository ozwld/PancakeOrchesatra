import { FC, useEffect, useContext } from "react";
import Router from "next/router";
import firebase from "../utils/Firebase";
import { AuthContext } from "../components/Auth";

const SignIn: FC = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    currentUser && Router.push("/");
  }, [currentUser]);

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  };
  const logout = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <div className="container">
      <button onClick={login}>googleでログインする</button>
    </div>
  );
};
export default SignIn;
