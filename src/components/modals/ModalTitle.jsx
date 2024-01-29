export default function ModalTitle({ title, onClick, children }) {
    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="text-xl sm:text-2xl font-medium">{title}</h2>
                <div onClick={onClick}>{children}</div>
            </div>
            <div className="w-full h-0.5 mt-1 sm:mt-2 mb-4 sm:mb-6 rounded-2xl bg-primary" />
        </>
    );
}
