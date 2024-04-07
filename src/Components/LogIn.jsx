
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.init";
import { useState } from "react";

const LogIn = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    // console.log(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        // console.log('Google');

        signInWithPopup(auth, provider)
        .then( result =>{
            const loggedInUser = result.user;
            // console.log(loggedInUser);
            setUser(loggedInUser);
        } )
        .catch( error =>{
            console.log('Error: ', error.message);
        })
    }


    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <button className="text-2xl" onClick={handleGoogleSignIn}>Google LogIn</button>

            {user && <div className="card-body items-center text-center bg-slate-600 shadow-xl text-white">
                <h1 className="card-title ">User: {user.displayName}</h1>
                <p>Email: {user.email}</p>
            </div>

            }
        </div>
    );
};

export default LogIn;