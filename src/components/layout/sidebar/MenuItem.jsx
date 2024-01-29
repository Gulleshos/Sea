export const MenuItem = ({ title, onClick, children }) => {
    const text = title.length > 7 ? title.slice(0, 7) + ".." : title;
    return (
        <div
            className="flex flex-col py-2 hover:bg-secondary cursor-pointer transition-all duration-300"
            onClick={onClick}
        >
            {children}
            <p className="mt-3 text-white text-center text-xs">{text}</p>
        </div>
    );
};
