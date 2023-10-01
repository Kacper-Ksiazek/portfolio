import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
    if (req.method === "POST" && req.nextUrl.pathname === "/") {
        return NextResponse.redirect(req.nextUrl.clone(), 303);
    }
}
