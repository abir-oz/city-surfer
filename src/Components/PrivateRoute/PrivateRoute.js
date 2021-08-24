import React, { useContext } from 'react';
import { Redirect, Route} from 'react-router-dom';
import { CitySurferContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser] =useContext(CitySurferContext) ;


    return (

        <Route
            {...rest}
            render={({ location }) =>
            loggedInUser?.name ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;