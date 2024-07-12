// "use client";

// import { useEffect } from "react";
// import Router from "next/router";
// import ProgressBar from "@badrap/bar-of-progress";
// import '../app/globals.css';
// import 'tailwindcss/tailwind.css';

// const progress = new ProgressBar({
//   size: 4,
//   color: "#FE595E",
//   className: "z-50",
//   delay: 100,
// });

// const ProgressBarComponent = () => {
//   useEffect(() => {
//     Router.events.on("routeChangeStart", progress.start);
//     Router.events.on("routeChangeComplete", progress.finish);
//     Router.events.on("routeChangeError", progress.finish);

//     return () => {
//       Router.events.off("routeChangeStart", progress.start);
//       Router.events.off("routeChangeComplete", progress.finish);
//       Router.events.off("routeChangeError", progress.finish);
//     };
//   }, []);

//   return null;
// };

// export default ProgressBarComponent;




"use client";

import { useEffect } from "react";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";
import '../app/globals.css';
import 'tailwindcss/tailwind.css';


const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

const ProgressBarComponent = () => {
  useEffect(() => {
    console.log("ProgressBar initialized");

    const handleRouteChangeStart = () => {
      console.log("Route change started");
      progress.start();
    };

    const handleRouteChangeComplete = () => {
      console.log("Route change completed");
      progress.finish();
    };

    Router.events.on("routeChangeStart", handleRouteChangeStart);
    Router.events.on("routeChangeComplete", handleRouteChangeComplete);
    Router.events.on("routeChangeError", handleRouteChangeComplete);

    return () => {
      Router.events.off("routeChangeStart", handleRouteChangeStart);
      Router.events.off("routeChangeComplete", handleRouteChangeComplete);
      Router.events.off("routeChangeError", handleRouteChangeComplete);
    };
  }, []);

  return null;
};

export default ProgressBarComponent;
