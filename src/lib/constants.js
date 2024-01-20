export const DOCTORS_TABLE_TITLES = ["ID", "First name", "Last name", "Post", "Email", "Phone"];

export const PATIENTS_TABLE_TITLES = ["ID", "First name", "Last name", "Email", "Phone"];
export const PATIENTS_OF_DOCTOR_TABLE_TITLES = [
    "ID",
    "First name",
    "Last name",
    "Count of appointments",
];

export const APPOINTMENTS_OF_DOCTOR_TABLE_TITLES = ["ID", "Date", "Time", "Patient", "Status"];
export const APPOINTMENTS_OF_PATIENT_TABLE_TITLES = ["ID", "Date", "Time", "Doctor", "Status"];

export const UPCOMING_APPOINTMENT_TITLES = ["ID", "Date", "Time", "Patient", "Doctor"];

export const TIMES = ["10:00", "11:00", "12:00", "13:00", "15:00", "16:00", "17:00", "18:00"];

export const SUBMIT_BUTTON_CLASSES = "text-white bg-primary hover:bg-secondary active:bg-secondary";
export const ACTION_BUTTON_CLASSES = "bg-white border border-primary hover:bg-primary hover:text-white active:bg-primary";

export const INPUT_ICON_STYLES = "h-6 stroke-primary stroke-2";
export const TYPE_CREATE_BUTTONS = [
    {
        accessLevel: "doctor",
        type: "report",
        title: "Create a report",
    },
    {
        accessLevel: "chief",
        type: "appointment",
        title: "Create an appointment",
    },
    {
        accessLevel: "chief",
        type: "patient",
        title: "Create a patient",
    },
    {
        accessLevel: "chief",
        type: "event",
        title: "Create an event",
    },
    {
        accessLevel: "admin",
        type: "doctor",
        title: "Create a doctor",
    },
];
