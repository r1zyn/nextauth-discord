import DiscordProvider from "next-auth/providers/discord";
import NextAuth from "next-auth";

export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/"
    },
    providers: [
        DiscordProvider({
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
        })
    ],
});
