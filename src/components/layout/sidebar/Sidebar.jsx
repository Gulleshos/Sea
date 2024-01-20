"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MenuItem } from "./MenuItem";
import { useAppContext } from "../../../lib/context/ContextProvider";
import { signOut } from "next-auth/react";
import {
    SearchIcon,
    AddNewIcon,
    DashboardIcon,
    FolderIcon,
    EventIcon,
    SettingsIcon,
    ExitIcon,
} from "../../../../public/icons";

export default function Sidebar() {
    const { data: session } = useSession();
    const { openSearchModal, openCreateEntityModal } = useAppContext();
    const router = useRouter();

    const menuItemStyles = "h-7 stroke-white stroke-[3px]";

    return (
        <aside className="h-full flex flex-col rounded-tr-2xl bg-primary text-white">
            <div className="h-full flex flex-col overflow-auto mt-5">
                <nav className="flex-1 mb-3 flex flex-col gap-2 ">
                    <MenuItem title="Search" onClick={openSearchModal}>
                        <SearchIcon className={menuItemStyles} />
                    </MenuItem>
                    <MenuItem title="Create" onClick={openCreateEntityModal}>
                        <AddNewIcon className={menuItemStyles} />
                    </MenuItem>
                    {session.user.accessLevel !== "doctor" && (
                        <MenuItem
                            title="Doctors"
                            onClick={() => router.push("/doctors")}
                        >
                            <DashboardIcon className={menuItemStyles} />
                        </MenuItem>
                    )}
                    <MenuItem
                        title="Patients"
                        onClick={() => router.push("/patients")}
                    >
                        <FolderIcon className={menuItemStyles} />
                    </MenuItem>
                    <MenuItem
                        title="Events"
                        onClick={() => router.push("/events")}
                    >
                        <EventIcon className={menuItemStyles} />
                    </MenuItem>
                </nav>
                <nav className="mb-3 flex flex-col gap-2">
                    <MenuItem
                        title="Settings"
                        onClick={() => router.push("/settings")}
                    >
                        <SettingsIcon className={menuItemStyles} />
                    </MenuItem>
                    <MenuItem title="Exit" onClick={() => signOut()}>
                        <ExitIcon className={menuItemStyles} />
                    </MenuItem>
                </nav>
            </div>
        </aside>
    );
}
