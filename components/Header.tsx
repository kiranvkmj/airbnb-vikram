import { headers } from "next/headers";
import Image from "next/image";
import { GlobeAltIcon,MenuIcon,UserCircleIcon,UsersIcon, SearchIcon  } from '@heroicons/react/solid';
import { SetStateAction, useEffect, useState } from "react";

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

import { DateRangePicker } from 'react-date-range';

import { useRouter } from 'next/navigation';

import path from "path";

interface HeaderProps {
  placeholder?: string;
}

const Header: React.FC<HeaderProps> = ({ placeholder }) =>

{
    const[SearchInput,setSearchInput]=useState("");
    const[startDate,setStartDate]=useState(new Date());
    const[endDate,setEndDate]=useState(new Date());
    const[noOfGuests,setNoOfGuests]=useState(1);
    const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // if (!isMounted) {
  //   return null;
  // }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();


    const  handleSelect= (ranges:any)=>{
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);

    }


    const resetInput=()=>{
      setSearchInput("")
    }

    const mytry={
      pathname:"/search",
      query:{
        location:SearchInput,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfGuests,
      },
    }



  
  
  function createUrl(options: { pathname: string; query: { location: string; startDate: string; endDate: string; noOfGuests: number; }; }): string {
      const query = new URLSearchParams(options.query as any).toString();
      return `${options.pathname}?${query}`;
  }
  
  const url = createUrl(mytry);
  console.log(url); // Output: /search?location=New+York&startDate=2024-05-23&endDate=2024-05-30&noOfGuests=2
  
    
  

  

  const search = () => {
    router.push(url)
  };
    


    const selectionRange={
      startDate:startDate,
      endDate:endDate,
      key:"selection"
    }


    console.log(SearchInput);
    return(
     <header className="sticky top-0 z-50
     grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

            {/* left top part */}


     <div 
      onClick={()=> router.push("/")}
     className="relative flex items-center h-10 cursor-pointer my-auto" >
       <Image
        src="https://links.papareact.com/qd3"
        fill
        alt=""
        style={{objectFit:"contain"}}
        objectPosition="left"
	    // sizes="100%"
       />
     </div>


     {/* middle top part */}


     <div  className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
      <input
      value={SearchInput}
      onChange={(e)=>setSearchInput(e.target.value)}
      className="flex-grow pl-5 bg-transparent outline-none
      text-sm text-gray-600 placeholder-gray-400"
      type="text"  
      placeholder={placeholder || "Start your search"} />


      < SearchIcon  className="hidden md:inline-flex
      h-8 bg-red-400 text-white rounded-full p-2
      cursor-pointer md:mx-2" />
     </div>

     {/* right top part */}
        {/* <p>i am here </p> */}
      <div  className="flex items-center  space-x-4  justify-end text-gray-500">
        <p className="hidden  md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer"/>


        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
        <MenuIcon className="h-6"/>
        <UserCircleIcon className="h-6"/>
      </div>
      </div>

      {SearchInput && (
        <div className="flex flex-col
        col-span-3 mx-auto">
          <DateRangePicker ranges={[selectionRange]}
          minDate={new Date()}
          rangeColors={["#FD5B61"]}
          onChange={handleSelect}
          />

          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>

          <UsersIcon className="h-5" />
          <input
           value={noOfGuests}
           onChange={(event)=>setNoOfGuests(parseInt(event.target.value))}
           type="number"
           min={1}
           className="w-12 pl-2 text-lg outline-none text-red-400"
           />
          </div>
          <div className="flex">
            <button onClick={resetInput} className="flex-grow
            text-gray-500">Cancel</button>
            <button onClick={search} className="flex-grow text-red-400">Search</button>
            </div>
        </div>
      )}
     
     </header>
    )
}

export default  Header;




