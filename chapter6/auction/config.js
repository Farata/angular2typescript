System.config({
  transpiler: "typescript",
  typescriptOptions: {
    emitDecoratorMetadata: true
  },
  packages: {
    app: {
      defaultExtension: "ts",
      main: "main.ts"
    }
  }
});
