import { ErrorIcon } from "../../public/icons";

export default function NoAccess() {
    return (
        <main className="h-full flex flex-col gap-5 justify-center items-center">
            <ErrorIcon className="h-28 w-28 stroke-primary stroke-[3px]" />
            <h2 className="text-xl lg:text-2xl font-medium">You do not have access to this information!</h2>
        </main>
    );
}
