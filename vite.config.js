import vue from "@vitejs/plugin-vue";
import path from "path";
console.log("path", path.resolve(__dirname, "./src"));
/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue()],
  alias: {
    // 键必须以斜线开始和结束
    "@": path.resolve(__dirname, "./src"),
    // '/@components/': path.resolve(__dirname, './src/components')
  },
  resolve: {
    extensions: [".vue"],
  },
};
