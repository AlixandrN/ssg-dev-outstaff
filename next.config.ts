import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export", // Для полной статической сборки
  images: { unoptimized: true }, // Отключаем оптимизатор (или настраиваем)
};

export default nextConfig;
