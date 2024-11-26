import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      try {
        // Check if the user's email matches the admin email
        if (user.email !== process.env.ADMIN_EMAIL) {
          console.error("Unauthorized email. Sign-in rejected.");
          return false; // Reject the sign-in attempt
        }
        return true; // Allow the sign-in
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false; // Reject the sign-in in case of an error
      }
    },
    async session({ session }) {
      try {
        // Set admin flag if email matches
        session.user.isAdmin = session.user.email === process.env.ADMIN_EMAIL;
        return session; // Return modified session
      } catch (error) {
        console.error("Error in session callback:", error);
        return session; // Return session even in case of an error
      }
    },
  },
};
