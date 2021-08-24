import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router';
import { fakeData } from '../../FakeData/data';
import Search from '../Search/Search';
import Result from '../ShowResult/Result';

import './Destination.css'



const Destination = () => {





    const { vehicle } = useParams();

    const [currentVehicle, setCurrentVehicle] = useState({});

    useEffect(() => {

        const current = fakeData.filter(data => data.name === vehicle);

        setCurrentVehicle(current);


    }, [vehicle])

    const [searched, setSearched] = useState(false);

    const [pickDestination, setPickDestination] = useState({
        pickFrom: '',
        pickTo: '',
        date: ''
    })

    const handleChange = (e) => {
        console.log(e.target.value);
        const inputDestination = { ...pickDestination };
        inputDestination[e.target.name] = e.target.value;
        setPickDestination(inputDestination);

    }


    const handleSubmit = (e) => {
        setSearched(true);
        e.preventDefault();
    }

    const map = currentVehicle[0]?.destination?.map;


    return (
        <>

            <div className="p-5">
                <div className="container border-top">
                    <div className="row mt-3">
                        <div className="col-md-4">
                            {!searched ?

                                <Search
                                    handleChange={handleChange}
                                    handleSubmit={handleSubmit}
                                    
                                >
                                </Search>

                                :

                                <Result
                                    pickDestination={pickDestination}
                                    currentVehicle={currentVehicle}
                                   

                                ></Result>


                            }

                        </div>
                        <div className="col-md-8">
                            <img src={map} alt="" />
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Destination;