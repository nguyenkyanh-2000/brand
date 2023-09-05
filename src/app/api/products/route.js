import { NextResponse } from "next/server";
import productSchema from "@/app/_schema/productSchema";
import transformedZodErrors from "@/app/_utils/transformedZodError";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { ApiError } from "next/dist/server/api-utils";

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase.from("product").select("*");
    if (error) {
      if (!error.status) error.status = 400;
      throw new ApiError(error.status, error.message);
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}

export async function POST(request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });
    // Request's body validation. Always return 400 error if invalid.
    let product = await request.json();
    const result = productSchema.safeParse(product);
    if (result.error) throw transformedZodErrors(result.error);
    else product = result.data;
    const { data, error } = await supabase
      .from("product")
      .insert(product)
      .select();
    // User do not have sufficient rights to edit the products.
    if (error?.code === "42501")
      throw new ApiError(401, "User do not have sufficient rights");
    if (error) {
      if (!error.status) error.status = 400;
      throw new ApiError(error.status, error.message);
    }
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }
}
