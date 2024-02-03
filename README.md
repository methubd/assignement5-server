Assignment Five Server
This is the server-side component of Assignment Five. It's built using Node.js, Express, and MongoDB, and it provides the backend functionality for the Assignment Five client.

Getting Started
Clone the repository:

bash
Copy code
git clone <repository-url>
cd assignment-five-server
Install dependencies:

bash
Copy code
npm install
Set up environment variables:

Create a .env file in the root of the project and add the necessary environment variables, such as MongoDB connection details, JWT secret, etc.

Build and run the server:

For production:

bash
Copy code
npm run build
npm run start:prod
For development:

bash
Copy code
npm run start:dev
The server should now be running at http://localhost:3000.

Scripts
npm run build: Transpiles TypeScript files to JavaScript for production.
npm run start:prod: Starts the server in production mode.
npm run start:dev: Starts the server in development mode with auto-restart using tsnd.
npm run lint: Lints the code using ESLint.
npm run lint:fix: Fixes linting issues automatically.
npm run prettier: Formats code using Prettier.
npm run prettier:fix: Fixes code formatting issues automatically.
npm test: Placeholder for running tests.
Dependencies
bcrypt: Password hashing library.
cookie-parser: Middleware for handling cookies.
cors: Cross-Origin Resource Sharing middleware.
dotenv: Loads environment variables from a .env file.
express: Web application framework for Node.js.
http-status: HTTP status codes.
jsonwebtoken: JSON Web Token authentication.
mongoose: MongoDB object modeling for Node.js.
zod: TypeScript-first schema declaration and validation.
Development Dependencies
@types/bcrypt, @types/cookie-parser, @types/cors, @types/express, @types/jsonwebtoken: TypeScript type declarations for various libraries.
@typescript-eslint/eslint-plugin, @typescript-eslint/parser: ESLint plugins for TypeScript.
eslint, eslint-config-standard-with-typescript, eslint-plugin-import, eslint-plugin-n, eslint-plugin-promise: ESLint and related plugins.
prettier: Code formatter.
ts-node-dev: TypeScript execution environment with auto-restart.
typescript: TypeScript language support.
Feel free to reach out if you have any questions or need further assistance!
