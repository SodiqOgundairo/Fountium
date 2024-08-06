import vector from '../assets/img/vector.png'
import logo from '../assets/img/logo_light.png'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {

    const date = new Date().getFullYear
    return (
        <div className="flex flex-col mb-0">
            <img src={vector} alt="" />
            <div className="flex flex-col bg-dark py-16 justify-center gap-3 md:gap-10 items-center">
                <img
                    className="w-[30%]"
                    src={logo}
                    alt="logo"
                />
                <p className="text-theme md:font-bold text-center text-md md:text-lg italic">
                We're on a mission to build a better future where technology creates good jobs for everyone.
                </p>

                <div className="flex justify-center gap-3 md:gap-10 text-light text-md md:text-lg italic flex-wrap text-center">
                    <p>Suite 100 – 1075 North Service Road West
                    Oakville, ON L6M 2G2</p>

                    <a href="mailto:info@fountium.com" className='hover:underline hover:text-theme'>info@fountium.com</a>
                </div>
            </div>
            <div className="flex justify-between items-center text-center flex-wrap mt-5">
                <div className="text-gray-500 px-4">
                    &copy; {date} <span className="text-theme">Fountium Inc.</span> All rights reserved
                </div>
                <div className="flex justify-center items-center gap-2 px-4">
                <BsTwitterX className='text-gray-600 hover:text-theme' />
                <FaFacebookF className='text-gray-600 hover:text-theme' />
                <FaGooglePlusG className='text-gray-600 hover:text-theme' />
                <FaLinkedinIn className='text-gray-600 hover:text-theme' />
                </div>
            </div>
        </div>
    )
}

export default Footer