import React from 'react'

const Home = () => {
  return (
    <div className="relative">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
      />
    </div>
    <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
         LET'S MAKE TECHNOLOGY WORK FOR YOU{' '}
        </div>
      </div>
      <div className="text-center">
        <h1 className=" md:text-7xl font-bold tracking-tight text-gray-900 text-4xl">
         AMAZING EXPERIENCE,
         <span className=" block text-theme">
         EXCELLENCE EVERYDAY
         </span>
        </h1>
      
        <div className="mt-10 md:flex items-center justify-center gap-x-6">
          <p className="font-bold">Managed IT</p>
          <p className="text-gray-400 font-bold text-lg">|</p>
          <p className="font-bold">Cyber Security</p>
          <p className="text-gray-400 font-bold text-lg">|</p>
          <p className="font-bold">Web Applications</p>
          
        </div>
      </div>
    </div>
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
      />
    </div>

    <div className="bg-gradient-to-br to-theme from-accent px-20 py-12 mx-auto text-center text-light ">
    <p className="text-lg md:text-2xl font-bold uppercase">
    Everything you need in
    one place
    </p>
    <div className="flex justify-center gap-6">
      <div className="flex justify-between items-center">
        <p className="text-9xl text-light">
          100%
        </p>
        <div className="text-2xl text-light"></div>
      </div>
    </div>
    </div>
  </div>
  )
}

export default Home