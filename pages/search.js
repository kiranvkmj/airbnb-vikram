
import "../app/globals.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";
import { useRouter } from 'next/navigation';
// import Image from "next/image";
import { useSearchParams } from 'next/navigation';
import { format } from "date-fns";


function Search({ searchResults, error }) {
  const router = useRouter();

  // Log searchResults to check if data is being passed
  // console.log("Search results: ", searchResults);
  
  const searchParams = useSearchParams();
  const location = searchParams.get('location');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const noOfGuests = searchParams.get('noOfGuests');

  // console.log({ location, startDate, endDate, noOfGuests });

  const formattedStartDate = startDate ? format(new Date(startDate), "dd MMMM yy") : "";
  const formattedEndDate = endDate ? format(new Date(endDate), "dd MMMM yy") : "";
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="xt-xs">300+ stays - {range} - for {noOfGuests} guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>

          <div className=" flex flex-col ">
            {searchResults.map(
              ({
                img,location,title,description,star,price,total
              }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                  />
              )
            )}
          </div>




          {/* Render search results */}
          <div>
            {searchResults.map((result, index) => (
              <div key={index}>
                <h2>{result.title}</h2>
                <p>{result.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  try {
    const res = await fetch("https://links.papareact.com/isz");
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const searchResults = await res.json();

    // Log searchResults to check if data is being fetched correctly
    // console.log("Fetched search results: ", searchResults);

    return {
      props: {
        searchResults,
      },
    };
  } catch (error) {
    console.error('Fetch failed:', error);
    return {
      props: {
        searchResults: [],
        error: 'Failed to fetch data',
      },
    };
  }
}
