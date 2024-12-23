import { auth } from "@/auth";
import handleError from "@/util/handleError";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const COMMENT_TEXT_LIMIT = 600;
const prisma = new PrismaClient();

async function POST(request: Request): Promise<NextResponse> {
  try {
    const currentSession = await auth();
    if (!currentSession) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    const currentUser = await prisma.user.findFirst({
      where: {
        email: currentSession.user!.email!,
      },
    });

    const formData = await request.formData();
    const content = String(formData.get("comment"));
    const rating = Number(formData.get("rating"));
    const imageUrl = String(formData.get("imageUrl"));

    if (!rating || !imageUrl) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (content.length > COMMENT_TEXT_LIMIT) {
      return NextResponse.json(
        { error: "Comment exceed text length limit" },
        { status: 400 },
      );
    }

    if (rating > 5 || rating < 0) {
      return NextResponse.json({ error: "Invalid Rating" }, { status: 400 });
    }

    const comment = await prisma.comment.create({
      data: {
        content: content,
        rating,
        author: {
          connect: { id: currentUser?.id },
        },
        image: {
          create: {
            filename: new URL(imageUrl).pathname.substring(1),
            url: imageUrl,
          },
        },
      },
      include: {
        image: true,
      },
    });

    return NextResponse.json({ success: true, comment });
  } catch (e) {
    handleError(e);
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 },
    );
  }
}

export { POST };
