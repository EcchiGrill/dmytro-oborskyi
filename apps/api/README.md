# 🛠️ Backend - Dmytro Oborskyi's Portfolio

This is the **backend** for my personal portfolio website, built with **NestJS** and **GraphQL/REST API**. It handles authentication, content management, and API endpoints for the frontend.

<p align="center">
  <a href="http://localhost:4200/api/docs" target="_blank"><img src="./public/swagger.png" alt="Swagger" /></a>
</p>

---

## 🚀 Features

- **📡 REST & GraphQL API** – Supports both **REST API** and **GraphQL** for flexible data retrieval.
- **📜 Prisma ORM** – Database management using **PostgreSQL** with **Prisma**.
- **📑 Swagger API Docs** – Available at **`/api/docs`** for easy API exploration.
- **📧 Email Service** – Handles email submissions from the frontend.

---

## 🏗️ Getting Started

Follow these steps to run the backend locally:

### 1️⃣ Install Dependencies in _root directory_ if you haven't installed them yet

### 2️⃣ Navigate to the Backend Directory

```bash
cd apps/api
```

### 3️⃣ Configure Environment Variables

Create a **.env** file in the **apps/api/** directory and add variables mentioned in **.env.example**

### 4️⃣ Generate Prisma Client

Before running the server, generate the Prisma client:

```bash
npx prisma generate
```

### 5️⃣ Start the Development Server

Using Yarn:

```bash
yarn dev
```

Or using npm:

```bash
npm run dev
```

## The backend will be available at:

- 🔗 REST API: **[localhost:4200](http://localhost:4200)**
- 🔗 Swagger API Docs: **[localhost:4200/api/docs](http://localhost:4200/api/docs)**
- 🔗 GraphQL Playground: **[localhost:4200/graphql](http://localhost:4200/graphql)**
