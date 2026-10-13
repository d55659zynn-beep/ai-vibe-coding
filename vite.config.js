import { defineConfig } from 'vite';

export default defineConfig({
  // 当前 Windows 环境无法写入 node_modules/.vite，改用 D 盘缓存目录。
  cacheDir: 'D:/sanrui-medical-dispatch-vite-cache',
  optimizeDeps: { disabled: true }
});

