import React from "react"

export default function Card(){

        const cardList = [
                {       
                        img: '/MaintenanceCover.jpg',
                        title: "Maintenance",
                        description:"Store your bike details."
                },
                {       
                        // Live Weather Updates: Integrate weather data for each track location. 
                        // Display real-time weather conditions, temperature, wind speed, and precipitation.
                        img:'/WeatherCover.jpg',
                        title: "Live Weather Updates",
                        description:"Real-time weather conditions."
                },
                {       
                        // Enable users to join group rides or meetups at specific tracks or locations, 
                        img:'/MeetUp.jpg',
                        title: "Meetups",
                        description:"You are not alone."
                },
                {
                        img:'/News2.jpg',
                        title: "News",
                        description:"Stay up to date with latest trends."
                },
        ]
        
        
        return(
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {cardList.map((card, id) => (
                        <div 
                                key={id} 
                                className="flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform bg-white rounded-3xl shadow-lg border border-gray-200 w-full aspect-[2/4] relative overflow-auto"
                        >
                                 <div 
                                        className="absolute inset-0 w-full h-full bg-center bg-cover"
                                        style={{
                                        backgroundImage: `url(${card.img})`,
                                        }}
                                />
                                {/* Semi-transparent overlay for better text readability */}
                                <div className="absolute inset-0 bg-black bg-opacity-40 z-10" /> 

                                <div className="absolute top-3 left-[5%] z-20 text-white">
                                        <h3 className="font-bold text-3xl text-left">{card.title}</h3>
                                        <p className="font-bold text-lg text-left">{card.description}</p>
                                </div>
                        </div>
                        ))}
                </div>
        )

}