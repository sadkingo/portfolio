import getWithBaseUrl from "@/util/getRelativePath";
import handleError from "@/util/handleError";
import { Prisma, PrismaClient, User } from "@prisma/client";

async function createUser(
  user: Prisma.UserCreateInput,
): Promise<User | null> {
  const { email, name } = user;
  try {
    const response = await fetch(getWithBaseUrl(`api/register`), {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData);
    }

    const data = await response.json();
    const user = data.user;

    return user;
  } catch (error) {
    handleError(error);
    return null;
  }
}

async function getUser({ email = "" }): Promise<User | null> {
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
