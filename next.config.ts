const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Thay 'VSTEP-Learning-Hub' bằng tên repo của b
  basePath: isProd ? '/VSTEP-Learning-Hub' : '',
  assetPrefix: isProd ? '/VSTEP-Learning-Hub' : '',
  images: {
    unoptimized: true, // Bắt buộc cho GitHub Pages
  },
};

export default nextConfig;
