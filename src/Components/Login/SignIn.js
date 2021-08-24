import React, { useContext} from 'react';

import { useForm } from "react-hook-form";
import { userSignIn } from './LoginManager';
import { useHistory, useLocation } from 'react-router-dom';
import { CitySurferContext } from '../../App';





const SignIn = ({ setNewUser, user, setUser }) => {
    const { register, handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(CitySurferContext);

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const onSubmit = data => {
        const { email, password } = data;
        console.log(data)
        userSignIn(email, password).then(
            res => {
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);
                console.log(loggedInUser);

            }
        )
    };

    return (
        <>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5 bg-white bg-white-form mt-1 mx-2">
                    <div className="m-1 px-2 py-3 ">
                        <form className="login-form p-4" onSubmit={handleSubmit(onSubmit)}>
                            <h5 className="ml-3 mb-5">Login</h5>


                            <div className="form-group">
                                <input className="form-control" placeholder="Email"  {...register("email")} />
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" name="password" {...register("password")} />
                            </div>
                            <div className="form-group clearfix">
                                <div className=" float-left">
                                    <input type="checkbox" name="remember" id="remember" />
                                    <label className="ml-1" htmlFor="remember">
                                        Remember me
                            </label>
                                </div>
                                <div className=" float-right">
                                    <span className="text-tomato"> <u>Forgot Password</u></span>
                                </div>
                            </div>
                            {
                                user.success
                                    ?
                                    <p className="success">User Signed in successfully!</p>
                                    :
                                    <p className="error">{user.error}</p>
                            }

                            <input className="form-control btn btn-tomato" type="submit" value="Login" />

                            <p className="text-center">Don't have an account?
                                <span onClick={() => setNewUser(true)} className="text-tomato"> <u>Create an account</u></span>
                            </p>
                        </form>
                    </div>
                </div>
            </div>


        </>
    );
};

export default SignIn;