import type { NextConfig } from "next";


const repoName = 'my-vstep-hub'; // Tên thư mục dự án của b

const repoName = 'VSTEP-Learning-Hub'; // Tên thư mục dự án của b

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',          // Bắt buộc để xuất ra html/css tĩnh
  images: {
    unoptimized: true,      // Bắt buộc để không bị lỗi thẻ Image
  },
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
};


export default nextConfig;

export default nextConfig;




