import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

async function POST(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const fileName = searchParams.get("filename");

    if (!fileName) {
      return NextResponse.json(
        { error: "File name is missing" },
        { status: 400 },
      );
    }

    const fileBlob = await request.blob();
    const fileSize = fileBlob.size;
    if (fileSize >= MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: "File exceeds size limit" },
        { status: 400 },
      );
    }

    const imageDetails = await put(fileName, fileBlob, {
      access: "public",
    });
    
    return NextResponse.json({ success: true, file: imageDetails });
  } catch {
    return NextResponse.json({ error: "Failed to upload" }, { status: 500 });
  }
}

export { POST };
