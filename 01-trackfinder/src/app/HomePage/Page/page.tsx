"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import NavBar from "@/app/NavBar";
import ShimmerButton from "@/components/ui/shimmer-button";
import Globe from "@/components/ui/globe";

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
    <div className="flex flex-col min-h-screen bg-gray-100 opacity-100 pb-32">
      <NavBar />

      <main className="flex-grow flex flex-col items-center justify-center pt-32 space-y-16">
        {/* Heading 1 - Left Aligned */}
        <div className="w-4/5 flex justify-start pt-12">
          <h1 className="text-7xl font-bold">
            <span className="relative text-black">SPEED</span>
          </h1>
        </div>

        {/* Heading 2 - Center Aligned */}
        <div className="flex justify-center">
          <h1 className="text-7xl font-bold">
            <span className="relative text-black">PASSION</span>
          </h1>
        </div>

        {/* Heading 3 - Right Aligned */}
        <div className="w-4/5 flex justify-end">
          <h1 className="text-7xl font-bold">
            <span className="relative text-black">THRILL</span>
          </h1>
        </div>

        {/* Video */}
        <div className="item-center pt-8">
            <video
              src="/vid1.mp4"
              loop
              muted
              autoPlay
              playsInline
              controls={false}
              className="min-h-screen"
            > Your browser does not support the video tag.</video>
        </div>


        <div className="w-4/5 flex justify-start pt-32">
          <h1 className="text-7xl font-bold">
            <span className="relative text-black">Services</span>
          </h1>
        </div>



        <div className="relative flex w-full overflow-hidden rounded-lg border bg-background px-8 md:shadow-xl h-[600px]">
          {/* Left side with text and button */}
          <div className="flex flex-col justify-center items-center space-y-6 w-2/3">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold">Worldwide Track Finder</h2>
              <p className="text-lg text-gray-600">
                Discover racing tracks near you with just one click.<br />
                We'll help you find the best locations for your rides.
              </p>
            </div>

            {/* Button positioned under the text */}
            <ShimmerButton
              onClick={getUserLocation}
              className="px-6 py-3 items-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition w-fit"
            >
              Find Track
            </ShimmerButton>
          </div>

          {/* Right side with Globe */}
          <div>
            <Globe />
          </div>

          {/* Gradient Overlay */}
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />

          {/* Location Display */}
          {userLocation && (
            <div className="absolute bottom-8 left-8 text-gray-800">
              <p className="text-lg">
                Latitude: {userLocation.latitude}, 
                Longitude: {userLocation.longitude}
              </p>
            </div>
          )}
        </div>




        
      </main>
    </div>
  );
}
