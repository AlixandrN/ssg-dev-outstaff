// import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
// import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaClient } from "@prisma/client";
// const connectionString = `${process.env.DATABASE_URL}`;

// const adapter = new PrismaPg({ connectionString });
// const prisma = new PrismaClient({ adapter });

// export { prisma };


import pg from "pg";

// Описываем тип для глобального объекта
interface CustomGlobal {
  prisma?: PrismaClient;
}

const globalForPrisma = globalThis as unknown as CustomGlobal;

const connectionString = process.env.DATABASE_URL;

const createPrismaClient = () => {
  // Если URL нет (например, во время билда), возвращаем клиент без адаптера.
  // Это позволит билду завершиться, а ошибку мы увидим только при реальном запросе.
  if (!connectionString) {
    return new PrismaClient();
  }

  const pool = new pg.Pool({ connectionString });
  const adapter = new PrismaPg(pool);
  
  return new PrismaClient({ adapter });
};

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
















// import { PrismaClient } from "../app/generated/prisma/client";
// import { PrismaPg } from "@prisma/adapter-pg";

// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient;
// };

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL,
// });

// const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     adapter,
//   });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export { prisma };
