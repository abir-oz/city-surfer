import React, {useState } from 'react';
import './Login.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SocialLogin from './SocialLogin';
import { firebaseLoginFrameWork } from './LoginManager';

const Login = () => {
    firebaseLoginFrameWork();
  
    const [newUser, setNewUser] = useState(false);

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        error: '',
        success: false,
    });

    console.log(user);

   



    return (
        <>
            <div className="container">
                {
                    newUser ?
                        <SignUp setNewUser={setNewUser} />
                        :

                        <SignIn
                            user={user}
                            setUser={setUser}
                            setNewUser={setNewUser}
                        />

                }

                <SocialLogin
                    user={user}
                    setUser={setUser}
                />


            </div>



        </>
    );
};

export default Login;