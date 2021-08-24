import React from 'react';
import Available from './Available';
import './Result.css';




const Result = (props) => {
    console.log(props);
    const { pickFrom, pickTo, date } = props.pickDestination;

    const [vehicle] = props?.currentVehicle;
    const {name, image, available } = vehicle;
    console.log(available);

    return (
        <div className="search p-3 rounded-lg">
            <ul className="result m-2 py-3">
                <li>{pickFrom} <br />
                    <span>Date:  {date}</span>
                </li>
                <li>{pickTo}</li>

            </ul>
            {
                available.map(data =>
                    <div className="bg-white m-2 rounded-lg p-2 font-weight-bold">

                        <Available

                            name={name}
                            image={image}
                            data={data}
                        >

                        </Available>
                    </div>
                )
            }
        </div>
    );
};

export default Result;