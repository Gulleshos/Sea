export default function Modal({ isOpen, children }) {
    return (
        isOpen && (
            <div className="w-screen h-screen absolute left-0 top-0 px-3 py-7 lg:py-12 bg-phantom overflow-hidden">
                <div className="max-w-[400px] max-h-[500px] 2xl:max-h-[600px] rounded-2xl p-3 lg:p-7 mx-auto z-50 border-2 bg-white overflow-hidden">
                    {children}
                </div>
            </div>
        )
    );
}
