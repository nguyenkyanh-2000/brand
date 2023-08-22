import { NextResponse } from "next/server";
import productSchema from "@/app/_schema/productSchema";
import transformedZodErrors from "@/app/_utils/transformedZodError";
import { AuthError } from "@supabase/supabase-js";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function GET() {
  const data = await supabase.from("product").select("*");
  return NextResponse.json(data);
}

export async function POST(request) {
  try {
    const supabase = createServerComponentClient({ cookies });
    let product = await request.json();
    // Request's body validation. Always return 400 error if invalid.
    const result = productSchema.safeParse(product);
    if (result.error) throw transformedZodErrors(result.error);
    else product = result.data;
    const { data, error } = await supabase
      .from("product")
      .insert(product)
      .select();
    // User do not have sufficient rights to edit the products.
    if (error) throw new AuthError("User do not have sufficient rights", 401);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.status }
    );
  }
}
