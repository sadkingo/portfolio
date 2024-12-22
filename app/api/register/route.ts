import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();
async function POST(request: Request): Promise<NextResponse> {
  try {
    const { email, name } = await request.json();
    if (!email || !name) {
      return NextResponse.json(
        { error: "User info is missing" },
        { status: 400 },
      );
    }

    const user = await prisma.user.upsert({
      where: { email },
      update: {
        name,
      },
      create: {
        email,
        name,
      },
    });

    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create new User" },
      { status: 500 },
    );
  }
}

export { POST };
