//.src/react-app-env.d.ts
// / <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    CLIENT_ID: string;
    CLIENT_SECRET: string;
  }
}
