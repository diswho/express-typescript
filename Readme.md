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

# use compression middleware in Express.js with TypeScript

`npm i -s compression`

`npm i -D @types/compression`

# Using body-parser Middleware

`npm i -s body-parser`

`npm i -D @types/body-parser`

# Using cors Middleware

`npm i -s cors`

`npm i -D @types/cors`

# Create a Logging Application-Level Middleware

`npm i -s uuid`

`npm i -D @types/uuid`

`npm i -s chalk`
`npm i -s chalk@5.2.0`
`npm i -D @types/chalk`

# Generate RSA Key Pair

`openssl genrsa -des3 -out private.pem 2048`

`openssl rsa -in private.pem -outform PEM -pubout -out public.pem`
