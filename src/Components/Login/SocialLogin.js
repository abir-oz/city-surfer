import React from 'react';
import fbIcon from '../../Images/fbIcon.png';
import googleIcon from '../../Images/googleIcon.png';
import firebase from "firebase/app";
import "firebase/auth";
import { signInWithSocial } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';






const SocialLogin = ({ user, setUser }) => {

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const signIn = (provider) => {
        signInWithSocial(provider).then((res) => {
            setUser(res);
            history.replace(from);
        })
    }


    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-5">
                <div className="m-1 px-2 py-3 text-center">
                    <p className="social-login-border"> Or</p>
                    <button
                        onClick={
                            () => {
                                signIn(fbProvider)
                            }
                        }
                        className="w-100 btn rounded-pill border-dark mb-3 p-2">
                        <span className="float-left">
                            <img src={fbIcon} className="w-75" alt="" />
                        </span>
                                    Continue with Facebook
                    </button>
                    <button
                        onClick={
                            () => {
                                signIn(googleProvider)
                            }
                        }
                        className="w-100 btn rounded-pill border-dark mb-3 p-2">
                        <span className="float-left">
                            <img src={googleIcon} className="w-75" alt="" />
                        </span>
                                    Continue with Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;