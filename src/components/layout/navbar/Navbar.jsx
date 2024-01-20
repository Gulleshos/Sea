"use client";
import { useRouter, usePathname, useParams } from "next/navigation";
import { useAppContext } from "@/lib/context/ContextProvider";
import { BackIcon } from "../../../../public/icons";
import BurgerMenu from "./BurgerMenu";

const titles = [
    { pathname: "/", title: "Home page" },
    { pathname: "/events", title: "Events" },
    { pathname: "/settings", title: "Settings" },
    { pathname: "/doctors", title: "Doctors" },
    { pathname: "/patients", title: "Patients" },
    { pathname: "/doctors/", title: "Doctor info" },
    { pathname: "/patients/", title: "Patient info" },
    { pathname: "/cabinet", title: "My cabinet" },
];

export default function Navbar() {
    const pathname = usePathname();
    const params = useParams();
    const router = useRouter();

    const {} = useAppContext();

    const handleGoBack = (e) => {
        e.preventDefault();
        router.back();
    };

    const title =
        titles.find((el) => el.pathname + (params.id || "") === pathname)
            .title || "";

    return (
        <header
            className="h-14 w-full p-3 flex justify-between items-center flex-row-reverse sm:flex-row 
            bg-secondary sm:rounded-bl-2xl"
        >
            <div className="w-8 cursor-pointer" onClick={handleGoBack}>
                <BackIcon className="h-8 mx-auto stroke-primary stroke-[3px]" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-medium">{title}</h1>
            <div className="cursor-pointer sm:invisible">
                <BurgerMenu />
            </div>
        </header>
    );
}
