import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ApiError } from "next/dist/server/api-utils";

export async function POST(request) {
  try {
    const requestData = await request.json();
    const { email, password } = requestData;
    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_LOCATION_ORIGIN}/api/auth/callback`,
      },
    });
    if (error) throw new ApiError(error.status, error.message);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Here is the login page!",
  });
}
