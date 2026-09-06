import { z } from "zod";

const envSchema = z.object({
  MONGODB_URI: z.string() /* .url() or a custom check */,
  BETTER_AUTH_SECRET: z.string().min(32),
  BETTER_AUTH_URL: z.string() /* the app's base URL */,
  // Google/GitHub OAuth client id + secret, when you get there
  // RESEND_API_KEY, when you get there
});

// parse process.env against envSchema, throw or exit if it fails
// export the parsed, typed result — so every other file imports
// a validated `env` object instead of touching process.env directly