import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Router Cache - unintended consequences */
  // experimental: {
  //   staleTimes: {
  //     dynamic: 30,
  //   },
  // },
};

export default nextConfig;
