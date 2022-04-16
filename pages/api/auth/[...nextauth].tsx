import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from '@database/mongo/legacy'

import SignInProvider from '@auth/signIn.Provider'
import SignInCredentials from '@auth/signIn.Credentials'

export default NextAuth({
  pages: {
    signIn: '/app/portal',
    signOut: '/home',
    error: '/app/portal',
    newUser: '/app/user',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FB_APP_ID,
      clientSecret: process.env.AUTH_FB_APP_SECRET,
    }),
    CredentialsProvider({
      name: 'Email',
      id: 'theiceji-login',
      type: 'credentials',
      credentials: {
        email: { label: 'E-mail', type: 'text', placeholder: 'E-mail' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials) {
        return SignInCredentials(credentials)
      },
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: process.env.TOKEN,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  theme: {
    colorScheme: 'dark',
  },
  callbacks: {
    async signIn({ user, account }) {
      return SignInProvider(user, account)
    },
    async redirect({ baseUrl }) {
      const appUrl = baseUrl + '/app/user'
      return appUrl
    },
    async jwt({ token, user }) {
      if (user) {
        token.userID = user.userID
        token.userRole = user.userRole
      }
      return token
    },
    async session({ session, token }) {
      session.user.userRole = token.userRole
      return session
    },
  },
})
