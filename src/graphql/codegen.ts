import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["./src/graphql/schemas/User.schema.ts", "./src/graphql/schemas/Video.schema.ts", "./src/graphql/schemas/Folder.schema.ts", "./src/graphql/schemas/Category.schema.ts"],
  documents: "./src/graphql/documents/share.graphql",
  generates: {
    "./src/graphql/generated/index.ts": {
      overwrite: true,
      plugins: ["typescript", "typescript-resolvers", "typescript-operations"],
    },
  },
};

export default config;
