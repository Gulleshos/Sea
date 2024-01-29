export default function Section({ children, styles }) {
    return (
        <section
            className={`${styles} p-4 sm:p-6 w-full rounded-2xl 
            border border-r-2 border-b-[3px] border-lightGray`}
        >
            {children}
        </section>
    );
}
