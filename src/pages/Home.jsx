import Booking from '../components/booking/Booking';

const Home = () => {
  return (
    <>
    
    <div className='booking_area w-full h-96 bg-gradient'>
        <div className="max-w-6xl w-full px-4 lg:px-0 mx-auto">
            <Booking />
        </div>
    </div>
    </>
  )
}

export default Home