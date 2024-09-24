import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { env } from "./env";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
});
