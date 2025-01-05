import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
    optimizePackageImports: ["lucide-react", "motion"],
    ppr: "incremental",
  },
};

export default nextConfig;
