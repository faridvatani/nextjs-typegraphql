# Next.js-typescript-GraphQL

![Alt text](screenshot.png "Title")

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## **Getting Started**

### 1. Setup MongoDB Database Server</br>
Make sure you already have Docker and Docker-compose installed on your computer. Run this command in your terminal to start the MongoDB Docker container:
```bash
docker-compose up -d
```
To stop the MongoDB container from running, you can run this command:
```bash
docker-compose down
```
### 2. Install Dependencies & Setting up Environment Variables</br>
Next.js has built-in support for loading environment variables from the `.env.local` file.
```bash
MONGODB_LOCAL_URI= mongodb://<USERNAME>:<PASSWORD>@localhost:6000/<DATABASE_NAME>?authSource=admin

NEXT_PUBLIC_GRAPHQL_ENDPOINT= http://localhost:3000/api/graphql
```
Then, install the dependencies:

```bash
yarn install
# or
npm install
```
### 3. Start the GraphQL Apollo Server & the Next.js server</br>
```bash
yarn dev
# or 
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

![Alt text](screenshot-1.png "Title")
Open http://localhost:3000/api/graphql in your browser and you should see Apollo Server’s default landing page. Click the “Query your server” button to redirect the Apollo Graphql Sandbox Studio. 

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.


## **About Packages**
<details>
<summary>More Details about packages</summary>

**`dotenv-safe`** : </br>
To validate the environment variables in order to ensure that all the necessary environment variables are defined in the .env.local file, we need to install the dotenv-safe package.

**`graphql`** : </br>
A query language and runtime which can be used in a Node.js server and the browser.

**`graphql-request`** : </br>
A minimalist GraphQL client similar to Axios but designed specifically for making GraphQL requests.

**`@graphql-codegen/cli`** : </br>
GraphQL Code Generator is a toolkit tailored to simplify and automate the generation of typed queries, subscriptions, and mutations for React, Next.js and other supported frontend frameworks.

**`@graphql-codegen/typescript`** : </br>
This plugin generates the base TypeScript types, depending on the structure of the GraphQL schema.

**`@graphql-codegen/typescript-operations`** : </br>
This plugin generates the TypeScript types for the Queries, Mutations, Subscriptions, and Fragments that are only in use.

**`@graphql-codegen/typescript-react-query`** : </br>
This plugin generates typed hooks for the various GraphQL operations.

**`apollo-server-micro`** : </br>
This plugin is the Micro integration for building the Apollo GraphQL server.

**`type-graphql`** : </br>
A Node.js framework for building GraphQL schema and resolvers using Typescript classes and decorators.

**`cors`** : </br>
A package to enable the Next.js GraphQL server to accept requests from cross-origin domains.

**`react-hook-form`** : </br>
A form validation library for React.js.

**`@hookform/resolvers`** : </br>
A React Hook Form validation resolvers for Zod, Yup, ...

**`zod`** : </br>
A TypeScript-first schema declaration and validation library.

**`axios`** : </br>
Axios is an HTTP client library used in both Node.js and the browser. It's also supports GraphQL requests.

**`tailwind-merge`** : </br>
A library for merging Tailwind CSS classes.

**`@typegoose/typegoose`** : </br>
A library that wraps around Mongoose to enable us to write Mongoose models using Typescript classes and decorators.

**`class-validator`** : </br>
A  library that allows you to use either decorator or non-decorator-based validation.
</details>

## **Learn More**

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## **Deploy on Vercel**

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
