import { NextResponse } from "next/server";
import { supabase } from "@/app/_utils/supabase";
const { AuthError } = require("@supabase/supabase-js");

export async function POST(request) {
  try {
    const requestData = await request.json();
    const { email, password } = requestData;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw new AuthError(error.message, error.status);

    if (data.user?.identities?.length === 0)
      throw new AuthError("User already existed", 400);

    return NextResponse.json(
      {
        message: "Register user successfully",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: error.status,
      }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Here is the register user page!",
  });
}
