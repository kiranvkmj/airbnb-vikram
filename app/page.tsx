// 'use client';

// // INDEX.JS FILE 


// import Head from "next/head";
// import Image from "next/image";
// import Header from "../components/Header";
// import Banner from "../components/Banner";
// import SmallCard from  "../components/SmallCard";
// import {useEffect, useState} from "react";


// // INDEX.JS FILE 


// export default function Home() {

//   // const [exploreData, setExploreData] = useState([]);

//   // useEffect(() => {

//   //   const fetchData = async () => {
//   //     try {
//   //       const res = await fetch("https://links.papareact.com/pyp", {
//   //           method: "GET",
//   //           mode: 'no-cors',
//   //           headers: {
//   //               "Content-Type": "application/json",
//   //           },
//   //       });
//   //       const data = await res.json();
//   //       setExploreData(data);
//   //     } catch (error) {
//   //       console.error("Error fetching data:", error);
//   //     }
//   //   };

//   //   fetchData();
//   // },[]
//   // );
// }



//   exploreData = [{"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"},{"img":"https://links.papareact.com/1to","location":"Manchester","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/40m","location":"Liverpool","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/msp","location":"York","distance":"4-hour drive"},{"img":"https://links.papareact.com/2k3","location":"Cardiff","distance":"45-minute drive"},{"img":"https://links.papareact.com/ynx","location":"Birkenhead","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/kji","location":"Newquay","distance":"6-hour drive"},{"img":"https://links.papareact.com/41m","location":"Hove","distance":"2-hour drive"}];
//   // props.exploreData
//   return (
//   <div>
//      <Head>
//     <title> AirBnb</title>
//    </Head>

//     {/* <h1>hello m//adam jii</h1> */}
//     <Header />
//     <Banner/>
    
//     <main  className="px-8 mx-auto max-w-7xl sm:px-16">
//       <section className="pt-6">
//         <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

//         {/* pull some data from a server */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {exploreData?.map((item: { img: any; distance: any; location: any; })=>(
//               <SmallCard
//               key={item.img}
//               img={item.img}
//               distance={item.distance}
//               location={item.location}
//               />
//             ))}
//         </div>
//       </section>
//     </main>
//     </div>
//   );
// }








'use client';

// INDEX.JS FILE 


import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from  "../components/SmallCard";
import {useEffect, useState} from "react";
import { title } from "process";
import MediumCard from  "../components/MediumCard";
import LargeCard from  "../components/LargeCard";
import Footer from "../components/Footer";

// INDEX.JS FILE 


export default function Home() {

    const exploreData = [{"img":"https://links.papareact.com/5j2","location":"London","distance":"45-minute drive"},{"img":"https://links.papareact.com/1to","location":"Manchester","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/40m","location":"Liverpool","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/msp","location":"York","distance":"4-hour drive"},{"img":"https://links.papareact.com/2k3","location":"Cardiff","distance":"45-minute drive"},{"img":"https://links.papareact.com/ynx","location":"Birkenhead","distance":"4.5-hour drive"},{"img":"https://links.papareact.com/kji","location":"Newquay","distance":"6-hour drive"},{"img":"https://links.papareact.com/41m","location":"Hove","distance":"2-hour drive"}];
    const cardsData=[
      {
      "img": "https://links.papareact.com/2io",
      "title": "Outdoor getaways"
      },
      {
      "img": "https://links.papareact.com/q7j",
      "title": "Unique stays"
      },
      {
      "img": "https://links.papareact.com/s03",
      "title": "Entire homes"
      },
      {
      "img": "https://links.papareact.com/8ix",
      "title": "Pet allowed"
      }]

  // props.exploreData
  return (
  <div>
     <Head>
    <title> AirBnb</title>
   </Head>

    {/* <h1>hello m//adam jii</h1> */}
    <Header />
    <Banner/>
    
    <main  className="px-8 mx-auto max-w-7xl sm:px-16">
      <section className="pt-6">
        <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>

        {/* pull some data from a server */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item: { img: any; distance: any; location: any; })=>(
              <SmallCard
              key={item.img}
              img={item.img}
              distance={item.distance}
              location={item.location}
              />
            ))}
        </div>
      </section>
            

      <section>
      <h2 className="text-4xl font-semibold
            py-8">Live anywhere</h2>

            <div className="flex space-x-3 overflow-scroll
             scrollbar-hide p-3 -ml-3/">
              {cardsData.map((item:{img:any;title:any})=>(
              <MediumCard 
               key={item.img}
               img={item.img}
               title={item.title}
              />))}
            </div>
      </section>

      <LargeCard
      img="https://links.papareact.com/4cj"
      title="The Greatest Outdoors"
      description="wishlists curated by airbnb."
      buttonText="Get Inspired"
      />
    </main>
    <Footer/>
    </div>
  );
}


