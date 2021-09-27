import esbuild from "esbuild";
import inlineImportPlugin from "esbuild-plugin-inline-import";

esbuild.build({
  entryPoints: ["worker.js"],
  bundle: true,
  platform: "node",
  outfile: "dist/worker.js",
  logLevel: "info",
  plugins: [
    inlineImportPlugin()
  ]
});
