import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({

  base: "/RUDN-Webdev-HW/",
  
  plugins: [react()],
  
  build: {
    outDir: "dist",
  },
});
