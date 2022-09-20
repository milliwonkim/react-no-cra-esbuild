const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");

esbuild
  .build({
    entryPoints: ["./src/index.js"],
    outdir: "build",
    minify: true,
    sourcemap: true,
    bundle: true,
    loader: {
      ".js": "jsx",
    },
    plugins: [inlineImage()],
  })
  .catch(() => process.exit(1));
