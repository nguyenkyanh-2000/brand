import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ApiError } from "next/dist/server/api-utils";
import productSchema from "@/app/_schema/productSchema";
import transformedZodErrors from "@/app/_utils/transformedZodError";

export async function GET(request, context) {
  try {
    const productId = context.params.id;
    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase
      .from("product")
      .select("*")
      .eq("id", productId)
      .single();
    if (error) throw new ApiError(400, error.message);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }
}

export async function PUT(request, context) {
  try {
    const productId = context.params.id;
    const supabase = createRouteHandlerClient({ cookies });
    // Request's body validation. Always return 400 error if invalid.
    let product = await request.json();
    const result = productSchema.safeParse(product);
    if (result.error) throw transformedZodErrors(result.error);
    else product = result.data;
    const { data, error } = await supabase
      .from("product")
      .update(product)
      .eq("id", productId)
      .select();
    // User do not have sufficient rights to edit the products.
    if (error?.code === "42501")
      throw new ApiError(401, "User do not have sufficient rights");
    if (error) throw new ApiError(error.status, error.message);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }
}

export async function DELETE(request, context) {
  try {
    const productId = context.params.id;
    const supabase = createRouteHandlerClient({ cookies });
    const { data, error } = await supabase
      .from("product")
      .delete()
      .eq("id", productId)
      .select();
    // User do not have sufficient rights to delete the products.
    if (!data.length)
      throw new ApiError(401, "User do not have sufficient rights");
    if (error) throw new ApiError(error.status, error.message);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { message: error.message },
      { status: error.statusCode }
    );
  }
}
