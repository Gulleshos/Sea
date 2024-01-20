"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    SearchIcon,
    AddNewIcon,
    DashboardIcon,
    FolderIcon,
    EventIcon,
    SettingsIcon,
    ExitIcon,
    BurgerMenuIcon,
    CloseIcon,
} from "../../../../public/icons";
import { useAppContext } from "@/lib/context/ContextProvider";

const BurgerMenuItem = ({ onClick, children }) => {
    return (
        <div
            className="w-full h-12 px-7 flex items-center text-2xl
        text-primary hover:bg-lightGray"
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default function BurgerMenu() {
    const { openSearchModal, openCreateEntityModal } = useAppContext();
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <button onClick={() => setOpen(true)}>
                <BurgerMenuIcon className="h-8 w-8 stroke-primary stroke-[3px]" />
            </button>

            <aside
                className={`absolute top-0 ${
                    isOpen ? "left-0" : "-left-full"
                } z-[500] h-screen w-full bg-phantom transition-all duration-1000`}
            >
                <nav className={`w-full h-full bg-white shadow-standart`}>
                    <div className="h-14 flex justify-between items-center px-7 bg-secondary">
                        <div className="flex items-center gap-5">
                            <h2 className="text-2xl font-medium">SealMed</h2>
                        </div>
                        <div onClick={() => setOpen(false)}>
                            <CloseIcon className="h-6 w-6 stroke-primary stroke-2" />
                        </div>
                    </div>

                    <div className="h-[calc(100%-58px)] flex flex-col py-7 overflow-auto">
                        <div>
                            <BurgerMenuItem
                                onClick={() => {
                                    openSearchModal();
                                    setOpen(false);
                                }}
                            >
                                <SearchIcon className="h-5 stroke-primary stroke-[3px]" />
                                <p className="ml-5">Search</p>
                            </BurgerMenuItem>
                            <BurgerMenuItem
                                onClick={() => {
                                    openCreateEntityModal();
                                    setOpen(false);
                                }}
                            >
                                <AddNewIcon className="h-5 stroke-primary stroke-[3px]" />
                                <p className="ml-5">Add new</p>
                            </BurgerMenuItem>
                            <BurgerMenuItem
                                onClick={() => router.push("/doctors")}
                            >
                                <DashboardIcon className="h-5 stroke-primary stroke-[3px]" />
                                <p className="ml-5">Doctors</p>
                            </BurgerMenuItem>
                            <BurgerMenuItem
                                onClick={() => router.push("/patients")}
                            >
                                <FolderIcon className="h-5 stroke-primary stroke-[3px]" />
                                <p className="ml-5">Patients</p>
                            </BurgerMenuItem>
                            <BurgerMenuItem
                                onClick={() => router.push("/events")}
                            >
                                <EventIcon className="h-5 stroke-primary stroke-[3px]" />
                                <p className="ml-5">Events</p>
                            </BurgerMenuItem>
                        </div>
                        <div className="w-[200px] h-[2px] m-7 rounded-2xl bg-lightGray" />
                        <div>
                            <BurgerMenuItem
                                onClick={() => router.push("/settings")}
                            >
                                <SettingsIcon className="h-5 stroke-primary stroke-[3px]" />
                                <p className="ml-5">Settings</p>
                            </BurgerMenuItem>
                            <BurgerMenuItem onClick={() => {}}>
                                <ExitIcon className="h-5 stroke-primary stroke-[3px]" />
                                <p className="ml-5">Exit</p>
                            </BurgerMenuItem>
                        </div>
                    </div>
                </nav>
            </aside>
        </>
    );
}
