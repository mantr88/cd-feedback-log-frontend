import { defineConfig, loadEnv } from "vite";

export default ({ mode }: { mode: string }) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    // To access env vars here use process.env.VITE_API_KEY

    define: {
      "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
    },
  });
};
