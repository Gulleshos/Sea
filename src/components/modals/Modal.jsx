export default function Modal({ isOpen, children }) {
    return (
        isOpen && (
            <div className="w-screen h-screen absolute left-0 top-0 px-3 py-7 lg:py-12 bg-phantom overflow-hidden z-[10000]">
                <div className="max-w-[400px] rounded-2xl p-4 sm:p-6 mx-auto bg-white overflow-hidden">
                    {children}
                </div>
            </div>
        )
    );
}
