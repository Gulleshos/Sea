"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "./auth/authConfig";

export default async function getSession() {
    const session = await getServerSession(authOptions);
    return session;
}
