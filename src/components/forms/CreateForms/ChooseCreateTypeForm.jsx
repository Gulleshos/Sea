import { DashboardIcon, TabletIcon, PatientCardIcon, EventIcon, PersonIcon } from "../../../../public/icons";
import { INPUT_ICON_STYLES, TYPE_CREATE_BUTTONS } from "@/lib/constants";

const getIconComponent = (type) => {
    switch (type) {
        case "report":
            return <DashboardIcon className={INPUT_ICON_STYLES} />;
        case "appointment":
            return <TabletIcon className={INPUT_ICON_STYLES} />;
        case "patient":
            return <PatientCardIcon className={INPUT_ICON_STYLES} />;
        case "event":
            return <EventIcon className={INPUT_ICON_STYLES} />;
        case "doctor":
            return <PersonIcon className={INPUT_ICON_STYLES} />;
        default:
            return null;
    }
};

export function ChooseCreateTypeForm({ handleCreateType, accessLevel }) {
    const filteredButtons =
        accessLevel === "admin"
            ? TYPE_CREATE_BUTTONS
            : accessLevel === "chief"
            ? TYPE_CREATE_BUTTONS.filter(
                  (button) => button.accessLevel === "chief" || button.accessLevel === "doctor"
              )
            : TYPE_CREATE_BUTTONS.filter((button) => button.accessLevel === "doctor");
    return (
        <>
            {filteredButtons.map((button) => (
                <ChooseCreateTypeButton
                    key={button.type}
                    title={button.title}
                    handleCreateType={() => handleCreateType(button.type)}
                >
                    {getIconComponent(button.type)}
                </ChooseCreateTypeButton>
            ))}
        </>
    );
}

function ChooseCreateTypeButton({ title, handleCreateType, children }) {
    return (
        <button
            className={`flex justify-between w-full cursor-pointer p-2 mb-4 rounded-2xl
                        transition-all duration-300 border border-lightGray hover:bg-secondary`}
            onClick={handleCreateType}
        >
            <p className="sm:text-xl">{title}</p>
            {children}
        </button>
    );
}
