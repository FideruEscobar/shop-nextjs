import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */

/*const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true', // Activa solo si ANALYZE=true
  });

const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // Desactiva la optimización de imágenes
    }
};

export default nextConfig;*/
const nextConfig = withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true', // Activa solo si ANALYZE=true
  })({
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
  });
  
  export default nextConfig;
