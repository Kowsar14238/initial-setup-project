import {
  GoogleAuthProvider,
  GithubAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
import { useState } from "react";

const LogIn = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  // console.log(app);

  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log('Google');

    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then( result => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      });
  };

  return (
    <div className="flex flex-col gap-5 items-center justify-center">
      {/* user ? logout : sign in */}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <div className="flex flex-col gap-5 items-center justify-center ">
          <button
            className="text-2xl bg-slate-400"
            onClick={handleGoogleSignIn}
          >
            Google LogIn
          </button>
          <button
            className="text-2xl bg-slate-400"
            onClick={handleGitHubSignIn}
          >
            GitHub
          </button>
        </div>
      )}

      {user && (
        <div className="card-body items-center text-center bg-slate-600 shadow-xl text-white">
          <h1 className="card-title ">User: {user.displayName}</h1>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default LogIn;
