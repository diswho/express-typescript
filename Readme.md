# URL

`https://www.becomebetterprogrammer.com/learn-how-to-use-typescript-with-node-js-and-express-js/`

`https://www.becomebetterprogrammer.com/how-to-set-up-basic-node-js-express-js-server-with-typescript/`

## Init

`npm init -y`

`npm i --save express`

`npm i --save-dev typescript @types/express`

# Create Minimal Server with Express.js and TypeScript

`src/index.ts`

# Running TypeScript Files in Node.js: Understanding the Process

`npx tsc src/index.ts`

`node src/index.js`

# Running TypeScript Files in Node.js: Quick Process

allows executing our TypeScript file in node

`npm i --save-dev ts-node`

run our project

`npx ts-node src/index.ts`

# Setting Up Scripts in the package.json

`"scripts"=>"start": "npx ts-node src/index.ts"`

running again

`npm run start`

`npm i --save-dev nodemon`

`"start:watch": "nodemon src/index.ts",`

`npm run start:watch`

# Setup TypeScript Configuration

`npx tsc --init`

# Reorganizing the Project Structure Even More
