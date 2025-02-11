import { PrismaClient } from "@prisma/client";

// prisma client created with singleton pattern
// https://bit.ly/4arJCj9
//
// "Here we are using a global variable to store the
// Prisma client instance. If the global variable is not
// set, we create a new Prisma client instance. If it is
// set, we use the existing instance. This way, we
// can guarantee that we only have one instance of the
// Prisma client in our application."

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
