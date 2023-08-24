import { NextResponse } from "next/server";
import { ApiError } from "next/dist/server/api-utils";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export async function POST() {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { error } = await supabase.auth.signOut();
    if (error) throw new ApiError(error.status, error.message);
    return NextResponse.json({ message: "Logout successfully" });
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Here is the logout page!",
  });
}
