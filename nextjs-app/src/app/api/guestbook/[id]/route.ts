import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();

  if (!body.name || !body.message) {
    return NextResponse.json(
      { error: "Tên và lời nhắn là bắt buộc" },
      { status: 400 }
    );
  }

  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 }
    );
  }

  // Cập nhật thông tin
  guestbookEntries[index] = {
    ...guestbookEntries[index],
    name: body.name,
    message: body.message,
  };

  return NextResponse.json(guestbookEntries[index]);
}
