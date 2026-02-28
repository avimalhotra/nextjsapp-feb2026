import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  headers:async ()=>{
    return [
      {
        source: "/(.*)",
        headers:[ 
            {
            key: "X-Custom-Header",
            value: "Next JS App",
          },
          {
            key:"encoding",
            value:"utf-8"
          },
          {
            key:"Access-Control-Allow-Origin",
            value:"*"
          }
        ]
      }
    ]
  }
};

export default nextConfig;
