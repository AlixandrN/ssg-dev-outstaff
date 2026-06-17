import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    const authHeader = request.headers.get("authorization");

    if (authHeader) {
      try {
        const authValue = authHeader.split(" ");
        const base64Credentials = authValue[1];
        const [login, password] = atob(base64Credentials).split(":");
        if (
          login === process.env.ADMIN_LOGIN &&
          password === process.env.ADMIN_PASSWORD
        ) {
          return NextResponse.next();
        }
      } catch {
        // Error
      }
    }

    return new NextResponse("Administrative zone. Access is limited.", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Admin Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
