import typescript from "@rollup/plugin-typescript"

export default {
  input: process.env.COMPONENT_ENTRY,
  output: {
    format: "esm",
    dir: "dist",
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json"
    })
  ]
}
