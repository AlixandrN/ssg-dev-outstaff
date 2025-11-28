import { NextResponse } from "next/server";

export async function GET(req: Request) {
  console.log("req: ", req);
  const posts = [
    { id: 1, name: "Post_1" },
    { id: 2, name: "Post_2" },
  ];

  return NextResponse.json(posts);
}
