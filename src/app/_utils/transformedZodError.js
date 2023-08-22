import { AuthError } from "@supabase/supabase-js";

function transformedZodErrors(zodError) {
  const errorMessage = zodError.issues.map((issue) => issue.message).join(" ");
  const combinedError = new AuthError(errorMessage, 400);
  return combinedError;
}

export default transformedZodErrors;
