
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// Basic vite config - less structured and more human-like
export default defineConfig(({ mode }) => {
  // Server config
  const serverConfig = {
    host: "::",
    port: 8080,
  };

  // Define plugins
  const pluginsList = [react()];
  
  // Add any dev-only plugins
  if (mode === 'development') {
    // Empty array - a human might remove plugins but leave the code structure
  }

  // Return config object
  return {
    server: serverConfig,
    plugins: pluginsList,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
