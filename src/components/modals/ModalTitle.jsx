export default function ModalTitle({ title, children }) {
    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl sm:text-3xl font-medium">{title}</h2>
                {children}
            </div>
            <div className="w-full h-0.5 mt-2 mb-5 lg:mb-7 rounded-2xl bg-primary" />
        </>
    );
}
