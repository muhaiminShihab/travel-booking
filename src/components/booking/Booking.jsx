import { useState } from "react";
import { Link } from "react-router-dom";
import BookingForm from "./BookingForm";

const Booking = () => {

    // state
    const [trip, setTrip] = useState([{
        "tripType": "",
        "vehicleType": "",
    }]);

    const [multi, setMulti] = useState([1]);

    // trip type
    function handleTrip(trip_type) {
        setMulti([1]);

        let mainTrip = [...trip];
        mainTrip[0].tripType = trip_type.type;

        setTrip(mainTrip);
    }

    // vehicle type
    function handleVehicle(vehicle_type) {
        let mainTrip = [...trip];
        mainTrip[0].vehicleType = vehicle_type.type;

        setTrip(mainTrip);
    }

    // multi city
    function handleMultiCity() {
        const mainMulti = [...multi, 1];
        setMulti(mainMulti);
    }

    return (
        <div className='pt-40 pb-20'>
            <form className='max-w-5xl px-6 pt-8 pb-10 w-full mx-auto bg-white rounded-lg drop-shadow'>
                <div className='flex items-center justify-between flex-wrap mb-10'>
                    <div className="flex-item">
                        <h2 className='text-lg font-bold mb-3'>Trip type:</h2>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='trip-type' className='hover:bg-indigo-600' onClick={ () => handleTrip({type: 'one-way'}) } /> One-way
                        </span>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='trip-type' className='hover:bg-indigo-600' onClick={ () => handleTrip({type: 'round-way'}) } /> Round
                        </span>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='trip-type' className='hover:bg-indigo-600' onClick={ () => handleTrip({type: 'multi-city'}) } /> Multi-city
                        </span>
                    </div>
                    <div className="flex-item">
                        <h2 className='text-lg font-bold mb-3'>Vehicle Type:</h2>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='vehicle-type' className='hover:bg-indigo-600' onClick={ () => handleVehicle({type: 'bus'}) } /> Bus
                        </span>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='vehicle-type' className='hover:bg-indigo-600' onClick={ () => handleVehicle({type: 'truck'}) } /> Truck
                        </span>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='vehicle-type' className='hover:bg-indigo-600' onClick={ () => handleVehicle({type: 'bike'}) } /> Bike
                        </span>
                        <span className='relative overflow-hidden inline-block mb-2 lg:mb-0 mr-3 border-1-custom py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-300 font-bold'>
                            <input type="radio" name='vehicle-type' className='hover:bg-indigo-600' onClick={ () => handleVehicle({type: 'car'}) } /> Car
                        </span>
                    </div>
                </div>

                {(trip[0].tripType === 'multi-city') &&
                <div className='inline-block mb-3 font-medium cursor-pointer p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300' onClick={ () => handleMultiCity() }>+ Add city</div>}
                
                {multi.map(item => <BookingForm key={item.index} trip={trip} />)}
                

                <div className="flex items-center justify-between flex-wrap mb-10">
                    <div className="flex-item">
                        <h2 className='text-lg font-bold mb-3'>Fare type:</h2>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300'>Regular</span>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300'>Armed Forces</span>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300'>Senior Citizen</span>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded mr-1 transition-all duration-300 hover:bg-gray-300'>Student</span>
                    </div>
                    <div className="flex-item mt-2 lg:mt-0">
                        <h2 className='text-lg font-bold mb-3'>Popular search:</h2>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded ml-1 transition-all duration-300 hover:bg-gray-300'>Dhaka to Madaripur</span>
                        <span className='inline-block mb-2 lg:mb-0 p-2 bg-gray-200 rounded ml-1 transition-all duration-300 hover:bg-gray-300'>Dhaka to Savar</span>
                    </div>
                </div>

                <div className="w-full text-center pt-10">
                    <Link to='/thanks' className='py-4 px-12 rounded-md bg-indigo-600 text-white font-bold'>Send Request</Link>
                </div>
            </form>
        </div>
    )
}

export default Booking