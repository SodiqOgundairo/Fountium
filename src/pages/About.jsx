import passion from '../assets/img/passion.png'
import about from '../assets/img/about2.png'

const About = () => {
    return (
        <div className='overflow-x-hidden'>

            <div className=" py-20 md:py-30 flex flex-col justify-items-center gap-3 mx-5 md:mx-20" data-aos="flip-up">
                <p className="text-4xl text-dark font-bold md:text-6xl m-0" data-os="fade-in-right">About US</p>
                <p className="text-xl text-gray-500">Welcome to Fountium</p>
                <img src={about} alt="" className='md:h-[600px] object-cover object-top rounded-xl' />
            </div>

            <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-20 mx-5 md:px-20 py-10  items-center ">
                <div className="rounded-md  " data-aos="fade-up-left">
                    <p className="text-6xl font-bold text-theme">Turn Your <em className="text-dark"> Passion </em>into <em className="text-dark">Success</em>!</p>

                    <p className="text-xl text-gray-500">
                        "We're on a mission to build a better future where technology creates good jobs and
                        marvelous labor-saving inventions for everyone. As technology enters its explosive period of growth,
                        the Internet and associated technologies are flourishing in a dramatic way."
                    </p>
                </div>
                <div className="rounded-md bg-none" data-aos="fade-down-right">
                    <img src={passion} alt="" className=" rounded-md object-contain object-center" />

                </div>

            </div>

            <div className="flex flex-col justify-centr bg-theme py-20" data-aos="fade-down">
                <p className="text-2xl text-light">Our services</p>
            </div>
        </div>
    )
}

export default About