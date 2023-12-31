import { NextResponse } from "next/server";
import { ApiError } from "next/dist/server/api-utils";
import loginSchema from "@/app/_schema/loginSchema";
import transformedZodErrors from "@/app/_utils/transformedZodError";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function POST(request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    // Request validation
    const requestData = await request.json();
    const result = loginSchema.safeParse(requestData);
    if (result.error) throw transformedZodErrors(result.error);
    const { email, password } = result.data;
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw new ApiError(error.status, error.message);
    if (data.user?.identities?.length === 0)
      throw new ApiError(400, "User already existed!");
    return NextResponse.json({
      error: null,
      data,
      status: 200,
      message: "User registered successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: { message: error.message } },
      { status: error.statusCode }
    );
  }
}
