import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ApiError } from "next/dist/server/api-utils";

export async function POST(request) {
  try {
    const requestData = await request.json();
    const { email, password } = requestData;
    const supabase = createRouteHandlerClient({ cookies });
    const userCredentials = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_LOCATION_ORIGIN}/api/auth/callback`,
      },
    });
    if (userCredentials.error)
      throw new ApiError(
        userCredentials.error.status,
        userCredentials.error.message
      );
    // Get user profile from login credentials
    const userProfile = await supabase
      .from("profile")
      .select("*")
      .eq("user_id", userCredentials.data.user.id)
      .single();
    if (userProfile.error) {
      if (!userProfile.error.status) error.status = 400;
      throw new ApiError(userProfile.error.status, userProfile.error.message);
    }
    // Check if the logged in user is an admin. If yes, the userProfile will be added an isAdmin = true.
    // HACKY
    const isAdmin = await supabase
      .from("admin")
      .select("*")
      .eq("user_id", userCredentials.data.user.id);
    if (isAdmin.error) {
      if (!isAdmin.error.status) error.status = 400;
      throw new ApiError(isAdmin.error.status, isAdmin.error.message);
    }
    if (isAdmin.data.length) userProfile.data.isAdmin = true;
    else userProfile.data.isAdmin = false;
    return NextResponse.json({
      error: null,
      data: { user: userProfile.data },
      status: 200,
      message: "Login successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: { message: error.message } },
      { status: error.statusCode }
    );
  }
}
