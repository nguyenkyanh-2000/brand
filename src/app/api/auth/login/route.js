import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
const { AuthError } = require("@supabase/supabase-js");

export async function POST(request) {
  try {
    const requestData = await request.json();
    const { email, password } = requestData;
    const supabase = createClientComponentClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_LOCATION_ORIGIN}/api/auth/callback`,
      },
    });

    console.log(data);
    if (error) throw new AuthError(error.message, error.status);
    return NextResponse.json(data.user);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Here is the login page!",
  });
}
