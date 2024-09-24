const {
  createServerClient,
  parseCookieHeader,
  serializeCookieHeader,
} = require("@supabase/ssr");

exports.createClient = (context: {
  req: any;
  res: any;
}) => {
  return createServerClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return parseCookieHeader(context.req.headers.cookie ?? "");
        },
        setAll(cookiesToSet: { name: any; value: any; options: any }[]) {
          cookiesToSet.forEach(({ name, value, options }) =>
            context.res.appendHeader(
              "Set-Cookie",
              serializeCookieHeader(name, value, options)
            )
          );
        },
      },
    }
  );
};
