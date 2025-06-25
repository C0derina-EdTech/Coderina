// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";
import connectDB from "../../../utlity/dbConnect";
import users from "../../../utlity/models/user";
import { comparePasswords } from "../../../lib/hash"; // or use user.matchPassword()

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();

        const { email, password } = credentials;

        if (!email || !password) throw new Error("Please enter both fields");

        const user = await users.findOne({ email }).select("+password");
        if (!user) throw new Error("Invalid email");

        const isValid = await comparePasswords(password, user.password);
        if (!isValid) throw new Error("Invalid password");

        // Optionally update last login or add other props
        return {
          id: user._id.toString(),
          email: user.email,
          name: user.username,
          role: user.role,
        };
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),

    AppleProvider({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.name = token.name;
      session.user.email = token.email;
      return session;
    },

    async redirect({ url, baseUrl, token }) {
      if (token?.role === "admin") return `${baseUrl}/admincodeboard/overview`;
      return baseUrl;
    },
  },

  pages: {
    signIn: "/sign-in", // your custom login page
  },

  secret: process.env.API_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
