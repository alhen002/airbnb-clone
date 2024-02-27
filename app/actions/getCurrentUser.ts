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
    console.log(session);
    if (!session?.user?.email) {
      return null;
    }
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    return user;
  } catch (error: any) {
    return null;
  }
}
