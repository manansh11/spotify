import { NextResponse } from "next/server";
const signedinPages = ["/", "/playlist", "/library"];

// This is not a node enviroment....
export default function middleware(req) {
  if (signedinPages.find((p) => p === req.nextUrl.pathname)) {
    const token = req.cookies.MUSIC_ACCESS_TOKEN;

    if (!token) {
      return NextResponse.redirect("/signin");
    }
  }
}
