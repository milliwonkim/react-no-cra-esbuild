const esbuild = require("esbuild");
const inlineImage = require("esbuild-plugin-inline-image");

const PORT = 3000;

esbuild
  .serve(
    {
      servedir: "public",
      port: PORT,
    },
    {
      entryPoints: ["./src/index.js"],
      outfile: "./public/build/index.js",
      bundle: true,
      loader: {
        ".js": "jsx",
      },
      plugins: [inlineImage()],
    }
  )
  .then(() => console.log(`React with ESBuild Running at ${PORT}`))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
