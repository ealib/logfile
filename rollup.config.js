import typescript from "@rollup/plugin-typescript"
import commonjs from "@rollup/plugin-typescript"

export default [
  {
    input: "src/index.ts",
    output: [
      { file: "dist/index.cjs", format: "cjs", exports: "default" },
      { file: "dist/index.mjs", format: "es" }
    ],
    plugins: [
      typescript()
    ]
  }
]