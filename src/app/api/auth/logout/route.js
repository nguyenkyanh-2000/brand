import { NextResponse } from "next/server";
import { supabase } from "@/app/_utils/supabase";
const { AuthError } = require("@supabase/supabase-js");

export async function POST(request) {
  try {
    const requestData = await request.json();
    const { email, password } = requestData;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw new AuthError(error.message, error.status);
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
    message: "Here is the logout page!",
  });
}
