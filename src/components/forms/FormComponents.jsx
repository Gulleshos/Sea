import Button from "@/components/Button";

export const FormSelect = ({ name, defaultValue, required, children }) => {
    return (
        <select
            name={name}
            required={required}
            className="text-base lg:text-xl px-4 py-2 mb-4 w-full border border-lightGray rounded-2xl"
        >
            <option value="" disabled selected hidden>
                {defaultValue}
            </option>
            {children}
        </select>
    );
};

export const FormInput = ({ type,value, name, required, placeholder }) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            required={required}
            className="text-base lg:text-xl px-4 py-2 mb-4 w-full border border-lightGray rounded-2xl"
        />
    );
};

export const FormTextarea = ({ name, placeholder }) => {
    return (
        <textarea
            name={name}
            placeholder={placeholder}
            className="text-base lg:text-xl px-4 py-2 w-full h-28 mb-4 resize-none overflow-y-auto border border-lightGray rounded-2xl"
        />
    );
};

export const FormButtons = ({ onClick, formId }) => {
    return (
        <div className="flex justify-between gap-5">
            <Button type="button" onClick={onClick}>
                Cancel
            </Button>
            <Button type="submit" formId={formId}>
                Submit
            </Button>
        </div>
    );
};

export const Form = ({ handleSubmit, formId, children }) => {
    return (
        <form action={handleSubmit} id={formId}>
            {children}
        </form>
    );
};
