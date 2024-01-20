import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { doctorAuth } from "../actions/doctor";

export const authOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.userId = user.doctorId;
                token.userName = user.firstName + " " + user.lastName;
                token.accessLevel = user.accessLevel;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.userId = token.userId;
            session.user.userName = token.userName;
            session.user.accessLevel = token.accessLevel;

            return session;
        },
    },
    providers: [
        CredentialsProvider({
            id: "123",
            type: "credentials",
            name: "password",
            credentials: {
                login: {
                    label: "Login",
                    type: "text",
                    placeholder: "login",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "password",
                },
            },
            async authorize(credentials) {
                const login = credentials.login;
                const password = credentials.password;
                if (!login || !password) return null;

                const response = await doctorAuth(login);
                const users = JSON.parse(response);
                if (!users) return null;

                const comparePassword = async (hashedPassword) => {
                    return await bcrypt.compare(password, hashedPassword);
                };

                const user = await users.find((user) => comparePassword(user.password));
                if (user === null) return null;

                if (user.login === login && (await comparePassword(user.password))) {
                    return user;
                }

                return null;
            },
        }),
    ],
};
