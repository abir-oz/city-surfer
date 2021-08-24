import React, { useEffect, useState } from 'react';
import { fakeData } from '../../FakeData/data';

import Rides from '../Rides/Rides';

import './Home.css'


const Home = () => {

    const data = fakeData;


    const [rides, setRides] = useState([]);

    useEffect(() => {
        setRides(data);
    }, [data])

    return (
        <div className="mt-5 p-5">
            <div className="container">
                <div className="row d-flex justify-content-center justify-items-center">
                    {
                        rides.map(r =>
                            <Rides key={r?.id} name={r.name} image={r.image}></Rides>

                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default Home;