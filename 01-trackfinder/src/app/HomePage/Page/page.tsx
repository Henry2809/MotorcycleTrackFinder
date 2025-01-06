"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/NavBar";

type Coordinates = { // for typescript knows the user location state
  latitude: number;
  longitude: number;
} | null;


export default function Home() {
  const router = useRouter();
  const [userLocation, setUserLocation] = useState<Coordinates>(null);

  const getUserLocation = () =>{ // get user current location
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) =>{
          const {latitude, longitude} = position.coords;
          // update the value of userlocation variable
          setUserLocation({ latitude, longitude });
        },
        (error) =>{
          console.error('Error getting user location:', error);
        }
      )
    }
    else{
      console.error('Geolocation is not supported by this browser.');
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 opacity-100">
      <NavBar />

      <main className="flex-grow flex items-center justify-center min-h-screen pt-32">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-white flex justify-start mt-12">
            <span className="relative text-black">SPEED</span>
          </h1>
          {/* Heading 2 - Center */}
          <h1 className="text-7xl font-bold text-white flex justify-center">
            <span className="relative text-black">PASSION</span>
          </h1>
          {/* Heading 3 - Right */}
          <h1 className="text-7xl font-bold text-white flex justify-end">
            <span className="relative text-black">THRILL</span>
          </h1>


          <button 
            onClick={getUserLocation} 
            className="px-4 py-2 mt-24 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >Get Location </button>
          {userLocation && (
            <p className="text-black text-lg">
              Latitude: {userLocation.latitude}, 
              Longitude: {userLocation.longitude}
            </p>
          )}


          <div className="items-center bg-black bg-opacity-50 hover:block mt-48 mb-10">
              <video
                src="/vid1.mp4"
                loop
                muted
                autoPlay
                playsInline
                controls={false}
                className="rounded shadow-lg"
              > Your browser does not support the video tag.</video>
          </div>

        </div>

      
      </main>
    </div>
  );
}
