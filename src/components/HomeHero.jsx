import CircleProgress from "../utils/CircleProgress"

const HomeHero = () => {
  return (
    <div className="relative gif-bg">
    {/* <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    <div
      
      className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
    />
  </div> */}
    <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-[300px]" data-aos-duration="5000">
      <div className="mb-8 flex justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-light ring-1 ring-theme hover:ring-light">
          LET'S MAKE TECHNOLOGY WORK FOR YOU{' '}
        </div>
      </div>
      <div className="text-center" data-aos="flip-up">
        <h1 className=" md:text-7xl font-bold tracking-tight text-light text-5xl">
          AMAZING EXPERIENCE,
          <span className=" block text-theme">
            EXCELLENCE EVERYDAY
          </span>
        </h1>

        <div className="mt-10 md:flex items-center text-light justify-center gap-x-6">
          <p className="font-bold">Managed IT</p>
          <p className="text-gray-400 font-bold text-lg">|</p>
          <p className="font-bold">Cyber Security</p>
          <p className="text-gray-400 font-bold text-lg">|</p>
          <p className="font-bold">Web Applications</p>

        </div>
      </div>
    </div>
    <div
      aria-hidden="false"
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80acff] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      />
    </div>


    <div className=" mx-auto bg-gradient-to-t from-dark via-dark to-black/0 text-light ">
        <div className=" w-full h-full px-10 py-20 md:p-20 md:pb-32">
          <p className="text-4xl md:text-6xl text-center text-theme font-bold uppercase my-10" data-aos="zoom-in-left">
            Everything you need in one place
          </p>
          <div className="flex md:justify-center flex-wrap gap-y-20 gap-[30%]">
            <div className="flex justify-between items-center" data-aos="flip-up">
              <CircleProgress />
              <div className="flex flex-col">
                <p className="font-bold text-theme">
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
            <div className="flex justify-between items-center" data-aos="flip-up">
              <CircleProgress />
              <div className="flex flex-col">
                <p className="font-bold text-theme">
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
      </div>
  </div>
  )
}

export default HomeHero