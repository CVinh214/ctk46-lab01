import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";
// GET /api/guestbook — Lấy danh sách lời nhắn
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get("limit");

  if (limit) {
    const limitNum = parseInt(limit);
    if (!isNaN(limitNum) && limitNum > 0) {
      return NextResponse.json(guestbookEntries.slice(0, limitNum));
    }
  }

  return NextResponse.json(guestbookEntries);
}
// POST /api/guestbook — Thêm lời nhắn mới
export async function POST(request: NextRequest) {
  const body = await request.json();

  // Kiểm tra dữ liệu đầu vào
  if (!body.name || typeof body.name !== "string" || body.name.length < 2 || body.name.length > 50) {
    return NextResponse.json(
      { error: "Tên phải từ 2 đến 50 ký tự" },
      { status: 400 },
    );
  }

  if (!body.message || typeof body.message !== "string" || body.message.length < 1 || body.message.length > 500) {
    return NextResponse.json(
      { error: "Lời nhắn phải từ 1 đến 500 ký tự" },
      { status: 400 },
    );
  }

  // Kiểm tra trùng lặp trong vòng 1 phút
  const now = new Date();
  const oneMinuteAgo = new Date(now.getTime() - 60000);
  
  const isDuplicate = guestbookEntries.some(entry => 
    entry.name === body.name && 
    entry.message === body.message && 
    new Date(entry.createdAt) > oneMinuteAgo
  );

  if (isDuplicate) {
    return NextResponse.json(
      { error: "Bạn vừa gửi lời nhắn này rồi. Vui lòng đợi 1 phút." },
      { status: 429 },
    );
  }

  // Tạo entry mới
  const newEntry = {
    id: Date.now().toString(),
    name: body.name,
    message: body.message,
    createdAt: new Date().toISOString(),
  };
  // Thêm vào đầu mảng (hiển thị mới nhất trước)
  guestbookEntries.unshift(newEntry);
  return NextResponse.json(newEntry, { status: 201 });
}
