import { useEffect, useState } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [exploreData, setExploreData] = useState([]);

  useEffect(async () => {

    const fetchData = async () => {
      try {
        const res = await fetch("https://links.papareact.com/pyp");
        const data = await res.json();
        setExploreData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <Component {...pageProps} exploreData={exploreData} />;
}

export default MyApp;
