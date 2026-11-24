import type { NextConfig } from "next";
import { deviceSizes, imageSizes } from "./image-widths.mjs";

const production = process.env.NODE_ENV === "production";
// Empty because the site sits at the root of its address. Set BASE_PATH to host it in a subfolder.
const basePath = production ? (process.env.BASE_PATH ?? "") : "";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Static files for GitHub Pages. Locally, the dev server keeps its own image optimizer.
  ...(production ? { output: "export" as const } : {}),
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    deviceSizes,
    imageSizes,
    ...(production ? { loader: "custom", loaderFile: "./src/image-loader.ts" } : {}),
  },
  turbopack: { root: __dirname },
};

export default nextConfig;
