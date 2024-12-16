import handleError from "@/util/handleError";
import { PrismaClient } from "@prisma/client";


async function createUser({ name, gitToken }) {
  const prisma = new PrismaClient();
  try {
    await prisma.user.create({
      data: {
        name: name,
        gitToken: gitToken,
      },
    });
  } catch (error) {
    handleError("Error creating user: " + error);
  } finally {
    await prisma.$disconnect();
  }
}

async function getUser({ gitToken }) {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findFirst(gitToken);
    return user;
  } catch (error) {
    handleError(error);
  } finally {
    await prisma.$disconnect();
  }
}
export { createUser, getUser };
