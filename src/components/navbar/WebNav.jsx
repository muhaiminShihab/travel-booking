import { Link } from "react-router-dom";
import Flight from "../../assets/images/flight.png";
import Train from "../../assets/images/train.png";
import Bus from "../../assets/images/bus.png";
import Cab from "../../assets/images/car.png";
import { useState } from "react";

const WebNav = () => {

    // menu
    const [expandNav, setExpandNav] = useState(false);

    function handleMenu() {
        if (expandNav === true) {
            setExpandNav(false);
        } else {
            setExpandNav(true);
        }
    }

    return (
        <div className='webnav_area w-full py-4'>
            <div className="max-w-6xl w-full px-4 lg:px-0 mx-auto">
                <div className="flex items-center justify-between flex-wrap font-bold">
                    <div className="flex-item">
                        <Link to="/">
                            <h2 className='text-3xl font-extrabold inline'>TravelBD</h2>
                        </Link>
                    </div>
                    <div className="flex-item hidden lg:block">
                        <Link to="/flights" className='mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300'>
                            <img src={ Flight } className="w-5 inline mr-1" alt="bus" />
                            <span>Flights</span>
                        </Link>
                        <Link to="/trains" className='mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300'>
                            <img src={ Train } className="w-5 inline mr-1" alt="bus" />
                            <span>Trains</span>
                        </Link>
                        <Link to="/busses" className='mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300'>
                            <img src={ Bus } className="w-5 inline mr-1" alt="bus" />
                            <span>Buses</span>
                        </Link>
                        <Link to="/cabs" className='mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300'>
                            <img src={ Cab } className="w-5 inline mr-1" alt="bus" />
                            <span>Cabs</span>
                        </Link>
                    </div>
                    <div className="flex-item hidden lg:block">
                        <Link to="/sign-in" className="border-1-custom py-2 px-4 rounded-md transition-all duration-300 hover:bg-gray-300">Login or Sign-up</Link>
                    </div>

                    <div className="flex-item lg:hidden">
                        <div onClick={() => handleMenu()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                            </svg>                              
                        </div>

                        {(expandNav === true) &&
                        <div className="h-screen w-2/3 bg-white absolute top-0 left-0 z-50 drop-shadow px-2 transition-all duration-300">
                            <div className="text-right pt-10" onClick={() => handleMenu()}>Close Menu</div>
                            <ul className="pt-20">
                                <li className="bg-gray-200 px-3 text-lg rounded-md py-3 mb-1 text-indigo-600"><Link to="/flighs">Travel with Flight</Link></li>
                                <li className="bg-gray-200 px-3 text-lg rounded-md py-3 mb-1 text-indigo-600"><Link to="/trains">Travel with Train</Link></li>
                                <li className="bg-gray-200 px-3 text-lg rounded-md py-3 mb-1 text-indigo-600"><Link to="/">Travel with Bus</Link></li>
                                <li className="bg-gray-200 px-3 text-lg rounded-md py-3 mb-1 text-indigo-600"><Link to="/">Travel with Cab</Link></li>
                                <li className="bg-gray-200 px-3 text-lg rounded-md py-3 mb-1 text-indigo-600"><Link to="/sign-in">Login or Sign-up</Link></li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebNav