import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

async function GET(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get("filename");

    if (!fileName) {
      return NextResponse.json({ error: "File name missing" }, { status: 400 });
    }

    const imageUrl = (
      await prisma.image.findFirst({
        where: {
          filename: fileName,
        },
      })
    )?.url;

    if (!imageUrl) {
      return NextResponse.json({ error: "image not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, imageUrl }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch image" },
      { status: 500 },
    );
  }
}

export { GET };
