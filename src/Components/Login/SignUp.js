import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { createNewUser } from './LoginManager';

const SignUp = ({ setNewUser }) => {
    


    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = useRef({});
    password.current = watch("password", "");


    const [createdUser, setCreatedUser] = useState({
        success: false,
        error: ''
    });



    const onSubmit = data => {
        const { name, email, password } = data;
        console.log(data);
        createNewUser(name, email, password)
            .then(res => {
                setCreatedUser(res);
            })
    };

    return (
        <>


            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5 bg-white bg-white-form mt-1 mx-2">
                    <div className="m-1 px-2 py-3 ">
                        <form className="login-form p-4" onSubmit={e => e.preventDefault()}>
                            <h5 className="ml-3 mb-5">Create an account</h5>
                            <div className="form-group">
                                <input className="form-control" placeholder="Name"
                                    
                                  {...register("name",{
                                    required: "You must provide a name!"
                                })} />
                                {errors.name && <p className="error">{errors.name.message}</p>}
                            </div>

                            <div className="form-group">
                                <input className="form-control" placeholder="Email" {...register("email",{
                                    required: "You must provide a valid email!",
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Please enter a valid email"
                                    }
                                })} />
                                {errors.email && <p className="error">{errors.email.message}</p>}
                            </div>

                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Password" {...register("password",{
                                    required: "You must specify a password",
                                    minLength: {
                                        value: 8,
                                        message: "Password must have at least 8 characters"
                                    },
                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/,
                                        message: "Password must contain a letter, digit, and a special character!"
                                    }
                                })} />

                                {errors.password && <p className="error">{errors.password.message}</p>}

                                <input type="password" className="form-control" placeholder="Confirm Password" name="cPassword" {...register("cPassword",{
                                    validate: value =>
                                        value === password.current || "The passwords do not match"
                                })} />

                                {errors.cPassword && <p className="error">{errors.cPassword.message}</p>}
                            </div>

                            <input
                                onClick={handleSubmit(onSubmit)}
                                className="form-control btn btn-tomato" type="submit" value="Create an account" />
                            {
                                createdUser.success
                                    ?
                                    <p className="success">User created successfully!</p>
                                    :
                                    <p className="error">{createdUser.error}</p>
                            }
                            <p className="text-center">
                                Already have an account?
                                <span onClick={() => setNewUser(false)} className="text-tomato"><u> Login</u></span>

                            </p>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignUp;