const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  // Lưu ý dấu / ở trước tên repo
  basePath: isProd ? '/VSTEP-Learning-Hub' : '',
  assetPrefix: isProd ? '/VSTEP-Learning-Hub' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
