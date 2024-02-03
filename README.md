# Assignment Five Server

This repository contains the server-side codebase for Assignment Five. It's built using Node.js, Express, and MongoDB, providing the backend functionality for the Assignment Five client.

## Getting Started

### Prerequisites

- Node.js / Express.js
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd assignment-five-server
1. **Install dependencies::**
   `npm install`
2. **Create a `.env` file in the root of the project with the required variables.**
   `# .env`
`NODE_ENV='development'`
`PORT=5000`
`DATABASE_URL=connect a db`

`JWT_ACCESS_SECRET=64e09011a39cc9d621db2ee964790df3d7366f1d3e5573389302f01840cc568e5f53088a798c411e9e5394c5955d4d5cc0486bc96f73f20c95e80e020422fed7`
`JWT_ACCESS_EXPIRES_IN=1d`

`JWT_REFRESH_SECRET=64e09011a39cc9d621db2ee964790df3d7366f1d3e5573389302f01840cc568e5f53088a798c411e9e5394c5955d4d5cc0486bc96f73f20c95e80e020422fed7`
`JWT_REFRESH_EXPIRES_IN=10d`

### Usage
1. **For production:**
   `npm run build`
`npm run start:prod`

3. **For development:**
   `npm run start:dev`
4. **Development Dependencies**
   `TypeScript, ESLint, Prettier: Development tools.`
