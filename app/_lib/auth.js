import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_CLIENT_SECRET,
    }),
  ],
  callback: {
    authorized: ({ auth, request }) => {
      return !!auth?.user;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);

export const { GET, POST } = handlers;
