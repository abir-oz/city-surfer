import React from 'react';
import { Link } from 'react-router-dom';

const Rides = (props) => {


    const { name, image} = props;

    return (
        <>

            <div className="vehicle col-lg-3 col-md-6 text-center">
                <Link to={"/destination/" + name}>
                    <div className="bg-white rounded-lg p-4 m-4">
                        <img className="w-50 m-3" src={image} alt="" />
                        <h4 className="title mt-3">{name}</h4>
                    </div>
                </Link>
            </div>

        </>
    );
};

export default Rides;