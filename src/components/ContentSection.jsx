import { Section } from ".";

export default function ContentSection({ children, title }) {
    return (
        <Section styles="max-w-[800px]">
            <h2 className="text-2xl lg:text-3xl font-medium text-center">
                {title}
            </h2>
            <div
                className="h-px sm:max-w-[500px] 
                mx-auto mt-px md:mt-2 mb-4 lg:mb-6 
                bg-primary rounded-2xl"
            />
            {children}
        </Section>
    );
}
