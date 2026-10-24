import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const videoDir = path.join(process.cwd(), "public", "assets", "video");
    if (!fs.existsSync(videoDir)) {
      return NextResponse.json({ videos: [] });
    }
    const files = fs.readdirSync(videoDir);
    const videoFiles = files
      .filter((file) => /\.(mp4|webm|mov|m4v)$/i.test(file))
      .map((file) => `/assets/video/${encodeURIComponent(file)}`);

    return NextResponse.json({ videos: videoFiles });
  } catch {
    return NextResponse.json({
      videos: ["/assets/video/vendmart-intro.mp4"],
    });
  }
}
