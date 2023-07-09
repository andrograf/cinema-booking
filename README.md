# Cinema
## Summary
This repository contains a Nuxt.js 3 project that utilizes Prisma as the ORM (Object-Relational Mapping) tool and MySQL as the database.

## Prerequisites
Before getting started, ensure that you have the following dependencies installed on your system:

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- MySQL database

## Getting Started
To set up the project locally, follow these steps:

- Navigate to the project directory:

```shell
cd <project-directory>
```
- Install the project dependencies:

```shell
npm install
```
- Configure the database connection:
    Open the .env file and replace the placeholders with your MySQL database credentials.
```
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```
- Generate the Prisma client:

```shell
npx prisma generate
```
- Run database migrations:

```shell
npx prisma migrate dev --schema=./prisma/schema.prisma
```
This will create the necessary database tables based on the schema defined in the prisma/schema.prisma file.

- Start the development server:

```shell
npm run dev
```
This will start the Nuxt.js development server at http://localhost:3000.

## Project Structure
The project follows a standard Nuxt.js directory structure with additional files and folders for Prisma integration. Here's an overview of the key files and folders:

components/: Contains reusable Vue.js components.
layouts/: Defines the layout templates for different pages.
pages/: Contains the application's pages and routes.
prisma/: Contains the Prisma configuration files and migrations.
store/: Contains Vuex store files for managing application state.

## Additional Resources
For more information on working with Nuxt.js, Prisma, and MySQL, refer to the following documentation:

[Nuxt.js Documentation](https://nuxt.com/docs/getting-started/introduction)

[Prisma Documentation](https://www.prisma.io/docs/getting-started)

[Mysql Documentation](https://dev.mysql.com/doc/)

