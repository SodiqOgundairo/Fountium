import { Link } from 'react-router-dom'
import HomeHero from '../components/HomeHero'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <div
        aria-hidden="false"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80b1ff] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="flex flex-col gap-y-20 justify-center items-center mx-auto text-center py-32 bg-light">
        <p className="text-4xl text-theme font-bold uppercase" data-aos="fade-up-right">
          Start a new project
        </p>

        <p className="text-7xl font-bold" data-aos="flip-right">Ready to transform your business?</p>

        <Link to='/contact-us' data-aos="zoom-in-up" className='text-light bg-gradient-to-r from-theme via-theme to-accent hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-bold rounded-lg text-lg px-20 py-5 text-center me-2 mb-2' >Contact Us</Link>
      </div>

      {/* <div className="bg-gradient-to-br to-theme from-accent mx-auto text-light  everything-bg">
        <div className="backdrop-blur-md w-full h-full p-10 md:p-20">

          <p className="text-lg md:text-2xl text-center font-bold uppercase">
            Everything you need in
            one place
          </p>
          <div className="flex justify-center flex-wrap gap-y-20 gap-[30%]">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="font-bold">
                  Web <span> |</span> Internet <span> | </span> Security
                </p>
                <ul>
                  <li>Technology solutions</li>
                  <li>Cyber Security</li>
                  <li>Physical Security</li>
                  <li>Risk and Compliance</li>
                  <li>Training</li>
                </ul>
              </div>
              <div className="text-2xl text-light"></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <p className="font-bold">
                Digital solutions
                </p>
                <ul>
                  <li>Websites & Web Applications</li>
                  <li>User experience designing</li>
                  <li>Branding strategy & identity</li>
                </ul>
              </div>
              <div className="text-2xl text-light"></div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Home