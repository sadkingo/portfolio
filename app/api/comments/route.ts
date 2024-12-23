import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const page = Number(searchParams.get("page"));
  const pageSize = Number(searchParams.get("pageSize") ?? 10);

  if (!isFinite(page) || page <= 0) {
    return NextResponse.json({ error: "Invalid page" }, { status: 400 });
  }
  if (!isFinite(pageSize) || pageSize > 50 || pageSize <= 0) {
    return NextResponse.json({ error: "Invalid pageSize" }, { status: 400 });
  }

  const commentsPage = await prisma.comment.findMany({
    skip: (page - 1) * pageSize,
    take: pageSize,
    include: {
      image: true,
    },
  });

  return NextResponse.json({ success: true, commentsPage });
}

export { GET };
