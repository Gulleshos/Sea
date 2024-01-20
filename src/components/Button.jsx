import { SUBMIT_BUTTON_CLASSES, ACTION_BUTTON_CLASSES } from "@/lib/constants";

const Button = ({ type = "submit", onClick, formId, children }) => {
    const buttonClasses =
        type === "submit" ? SUBMIT_BUTTON_CLASSES : ACTION_BUTTON_CLASSES;

    return (
        <button
            className={`${buttonClasses} py-2 px-4 text-lg lg:text-xl text-center font-medium
            cursor-pointer rounded-2xl transition-all duration-300 active:translate-y-px`}
            type={type}
            onClick={onClick}
            form={formId}
        >
            {children}
        </button>
    );
};

export default Button;
