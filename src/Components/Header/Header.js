import React, { useContext } from 'react';
import { Link} from 'react-router-dom';
import { CitySurferContext } from '../../App';

const Header = () => {
   

    const [loggedInUser] = useContext(CitySurferContext);

    const name = loggedInUser?.name;

    return (
        <header className="p-3 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light">

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse px-5 mx-5 my-auto" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ">

                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/destination" className="nav-link">Destination</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/blog" className="nav-link">Blog</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/contact" className="nav-link">Contact</Link>
                        </li>
                        <li className="nav-item ">
                            {!name ? <Link to="/login" className="btn btn-tomato px-4 py-1
                            rounded-lg nav-link text-white">Login</Link>

                                :

                                <span className="nav-link">
                                    {name}
                                </span>



                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;