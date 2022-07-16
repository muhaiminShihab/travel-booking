import React from 'react'

const BookingForm = ({ trip }) => {
    return (
    <div className='lg:flex items-center justify-between mb-10'>
        <fieldset className='flex-item border-1-custom p-2 rounded-md  lg:min-w-50 w-full mx-1'>
            <legend className='font-bold px-2 text-lg'>From</legend>
            <input type="text" placeholder='Where from' className='rounded p-1 lg:min-w-40 w-full transitionall duration-300 focus:outline-0 focus:bg-gray-200 font-medium' />
        </fieldset>
        <fieldset className='flex-item border-1-custom p-2 rounded-md lg:min-w-50 w-full mx-1'>
            <legend className='font-bold px-2 text-lg'>To</legend>
            <input type="text" placeholder='Where to' className='rounded p-1 lg:min-w-40 w-full transitionall duration-300 focus:outline-0 focus:bg-gray-200 font-medium' />
        </fieldset>
        <fieldset className='flex-item border-1-custom p-2 rounded-md lg:min-w-50 w-full mx-1'>
            <legend className='font-bold px-2 text-lg'>Departure</legend>
            <input type="datetime-local" className='rounded p-1 lg:min-w-40 w-full transitionall duration-300 focus:outline-0 focus:bg-gray-200 font-medium' />
        </fieldset>

        {(trip[0].tripType === 'round-way') &&
        <fieldset className='flex-item border-1-custom p-2 rounded-md lg:min-w-50 w-fll mx-1'>
            <legend className='font-bold px-2 text-lg'>Return</legend>
            <input type="datetime-local" className='rounded p-1 lg:min-w-40 w-full transitionall duration-300 focus:outline-0 focus:bg-gray-200 font-medium' />
        </fieldset>}
    </div>
    )
}

export default BookingForm