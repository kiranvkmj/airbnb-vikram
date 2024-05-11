// module.exports ={
//     images:{
//         remotePatterns: ["links.papareact.com"],
//     },
// };

// // next.config.js

module.exports = {
    images: {
      remotePatterns: [
        {
          // Define your remote pattern configurations here
        //   domain: "links.papareact.com",
          /// Other configuration options...
          protocol:'https',
          hostname:"links.papareact.com"
        },
        // Additional remote pattern configurations if needed
      ],
    },
  };
  