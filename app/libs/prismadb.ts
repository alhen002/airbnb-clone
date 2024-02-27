import { PrismaClient } from '@prisma/client';

// best practice for NEXTJS
declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV != 'production') globalThis.prisma = client;

export default client;

// ich glaube das ist nicht mehr notwendig unbedingt testen
