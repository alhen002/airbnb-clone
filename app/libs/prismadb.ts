import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

function prismaClientSingleton() {
  return new PrismaClient();
}

const client = globalThis.prisma ?? prismaClientSingleton();
if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;
