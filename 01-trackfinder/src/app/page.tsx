'use client'
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handlePredictionClick = () => { 
    router.push('/HomePage/Page');
  }

  return (
    <div className="relative bg-cover bg-center bg-fixed min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url(/background.jpg)"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      <div className="relative z-20 text-center flex flex-col items-center">
        <h1 className="text-5xl mb-3 font-bold text-white animate-popIn">
          Welcome to Motorcycle Track Finder
        </h1>
        <p className="mt-8 text-white text-3xl"><em>A quick and easy way to find a <b>RACETRACK</b> near you</em></p>


        <div className="mt-11 flex justify-center items-center w-full">
          <button 
            onClick={handlePredictionClick}
            className="w-40 h-18 bg-blue-500 text-white text-xl text-center font-bold py-2 rounded-full hover:bg-blue-600 transition duration-200"
          >Get started</button>
        </div>
      </div>
    </div>
  );
}