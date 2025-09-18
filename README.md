# React Router + Telefunc Template

A template for setting up [Telefunc](https://github.com/brillout/telefunc) on React-Router.

Telefunc introduces Remote Functions instead of APIs. Streamlining backend interactions significantly.


## Getting Started

```bash
npm install # Install the dependencies:

npm run dev # Start the development server with HMR
# Your application will be available at http://localhost:5173

npm run build # Build for production
npm run start # Start the production build
```

Note that the `start` command uses a different file than default react-router : 
`react-router-serve ./build/server/index2.js`

This is a workaround for a bundling issue, which might be fixed soon.

Special thanks to @brillout for creating [Telefunc](https://github.com/brillout/telefunc) and troubleshooting the build issues.

