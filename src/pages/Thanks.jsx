import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div className='booking_area w-full h-60 bg-gradient'>
        <div className="max-w-6xl w-full px-4 lg:px-0 mx-auto">
            <div className="pt-40 pb-20">
                <div className="max-w-lg w-full bg-white drop-shadow mx-auto rounded-md py-20 px-4 text-center">
                    <h2 className='font-extrabold text-3xl'>Thank you.</h2>
                    <p>
                        We got your trip request, we will assign a rider for you and confirm your trip acception as soon as possible. Stay with us.
                    </p>

                    <div className="w-full text-center pt-10">
                        <Link to='/' className='py-3 px-8 rounded-md bg-indigo-600 text-white font-bold'>Back to Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Thanks