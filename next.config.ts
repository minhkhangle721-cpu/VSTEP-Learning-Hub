import type { NextConfig } from "next";

<<<<<<< HEAD
const repoName = 'my-vstep-hub'; // Tên thư mục dự án của b
=======
const repoName = 'VSTEP-Learning-Hub'; // Tên thư mục dự án của b
>>>>>>> f2fe1cd892b79f0954bb2c46a3ef348af7361644
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

<<<<<<< HEAD
export default nextConfig;
=======
export default nextConfig;


>>>>>>> f2fe1cd892b79f0954bb2c46a3ef348af7361644

