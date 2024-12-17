import handleError from "@/util/handleError";
import { Prisma, PrismaClient } from "@prisma/client";

async function createUser(user: Prisma.UserCreateInput) {
  const prisma = new PrismaClient();
  const { email, name, image } = user;
  try {
    const user = await prisma.user.create({
      data: {
        email,
        name,
        image,
      },
    });
    return user;
  } catch (error) {
    handleError("Error creating user: " + error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}

async function getUser({ email = "" }) {
  const prisma = new PrismaClient();
  try {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    handleError(error);
    return null;
  } finally {
    await prisma.$disconnect();
  }
}
export { createUser, getUser };
