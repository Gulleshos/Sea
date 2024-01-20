export default function Section({ children, styles }) {
    return (
        <section
            className={`${styles} p-4 2xl:p-6 w-full border-x border-t border-b-[3px]
            rounded-2xl bg-white border-lightGray`}
        >
            {children}
        </section>
    );
}
