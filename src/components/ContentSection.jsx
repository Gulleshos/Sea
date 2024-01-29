import { Section } from ".";

export default function ContentSection({ children, title }) {
    return (
        <Section styles="max-w-4xl z-50">
            <h2 className="text-2xl sm:text-3xl font-medium text-center">
                {title}
            </h2>
            <div
                className="h-0.5 max-w-md bg-primary rounded-2xl
                mx-auto mt-1 sm:mt-2 mb-4"
            />
            {children}
        </Section>
    );
}
