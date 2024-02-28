import { getServerSession } from 'next-auth/next';
import { options } from '../api/auth/[...nextauth]/options';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getSession() {
  return await getServerSession(options);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    return await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
  } catch (error: any) {
    return null;
  }
}
