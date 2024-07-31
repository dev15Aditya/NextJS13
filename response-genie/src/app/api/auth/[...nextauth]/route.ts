import { google } from 'googleapis';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
    }),
  ],

  secret: process.env.SECRET,

  callbacks: {
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          access_token: token.access_token,
        });
      }
      return session;
    },
  },

  session: {
    maxAge: 24 * 60 * 60,
  },
});

export { handler as GET, handler as POST };
