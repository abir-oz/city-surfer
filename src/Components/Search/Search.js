import React from 'react';

const Search = (props) => {

    const {handleChange, handleSubmit } = props;


    return (


        <div className="search p-3 rounded-lg">
            <form onSubmit={handleSubmit} className="m-3">
                <label htmlFor="pickFrom">Pick From</label>
                <input onChange={handleChange} type="text" name="pickFrom" id="pickFrom" className="form-control mb-2" />
                <label htmlFor="pickTo">Pick To</label>
                <input onChange={handleChange} name="pickTo" id="pickTo" type="text" className="form-control mb-3" />
                <label htmlFor="date">Date</label>
                <input onChange={handleChange} name="date" id="date" type="date" className="form-control mb-3" />
                <input type="submit" className="form-control btn btn-tomato" />
            </form>
        </div>

    );
};

export default Search;