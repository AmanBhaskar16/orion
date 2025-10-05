
// import { PrismaClient } from "../generated/prisma/index.js";

// const prisma = new PrismaClient();

// export default prisma;

// src/config/prismaClient.js
import { PrismaClient } from '@prisma/client'; // <--- USE OFFICIAL PACKAGE NAME, NOT A RELATIVE PATH

// Create a global PrismaClient instance and reuse it across function calls.
// This is essential for Vercel's serverless environment to prevent connection limit exhaustion.
let prisma;

if (process.env.NODE_ENV === 'production') {
  // Production environment: Always create a new client (or use a recommended solution like Prisma Accelerate)
  // For Vercel, it is best to use a global object to cache the client.
  prisma = new PrismaClient();
} else {
  // Development environment (and local Vercel deployments): Cache the client globally
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

// Or, the simplified and more robust version:
// const prisma = global.prisma || new PrismaClient();
// if (process.env.NODE_ENV !== 'production') global.prisma = prisma;


export default prisma;