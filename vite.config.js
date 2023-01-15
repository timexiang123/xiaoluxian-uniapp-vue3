import { defineConfig } from "vite";    
import uni from "@dcloudio/vite-plugin-uni";    

/**    
 * @type {import('vite').UserConfig}    
 */    
export default defineConfig({    
  plugins: [uni()],
  server: {
      proxy: {
        "/api": {
          target: "https://m.xuexiluxian.cn/api",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    }
});