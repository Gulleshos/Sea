import { Montserrat } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { AppProvider } from "@/lib/context/ContextProvider";
import SessionProvider from "@/lib/auth/authProvider";
import { authOptions } from "@/lib/auth/authConfig";
import {
    Sidebar,
    Logo,
    Navbar,
    SearchModal,
    AppointmentModal,
    CreateEntityModal,
} from "@/components";
import { Toaster } from "sonner";

const montserrat = Montserrat({ subsets: ["latin", "cyrillic"] });

export const metadata = {
    title: "SealMed",
    description: "Powered by SealSoft",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession(authOptions);
    return (
        <html lang="en">
            <AppProvider>
                <SessionProvider session={session}>
                    <body className={montserrat.className}>
                        <div className="flex gap-3 h-[100svh] overflow-hidden">
                            <div className="hidden sm:flex flex-col gap-3 w-16">
                                <Logo />

                                <div className="h-full overflow-hidden">
                                    <Sidebar />
                                </div>
                            </div>
                            <div className="flex flex-col flex-1 w-full gap-3">
                                <Navbar />

                                <div className="flex-1 sm:mb-3 sm:mr-3 overflow-auto">
                                    {children}
                                    <AppointmentModal />
                                    <CreateEntityModal
                                        accessLevel={session.user.accessLevel}
                                    />
                                    <SearchModal user={session.user} />
                                </div>
                            </div>
                        </div>
                        <Toaster richColors/>
                    </body>
                </SessionProvider>
            </AppProvider>
        </html>
    );
}
