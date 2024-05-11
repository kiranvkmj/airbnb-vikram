// -import React from 'react'
import Image from "next/image";

function SmallCard({img,location,distance}) {
  return (
    <div className="flex items-center m-2 mt-5 cursor-pointer space-x-4 rounded-xl hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out ">
      

      {/* left part of the card */}
      <div className="relative w-16 h-16">
        <Image alt="" src={img} fill className="rounded-lg" sizes="100%" />
      </div>

      {/* right part */}

      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;
