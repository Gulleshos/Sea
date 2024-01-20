import { ContentSection } from "@/components";
import dateFormatter from "@/lib/dateFormatter";

export default function EventCart({ title, description, time, date }) {

    return (
        <ContentSection title={title}>
            <p className="lg:text-xl text-center">{description}</p>
            <div className="flex justify-between mt-20">
                <div className="">
                    <p className="text-sm sm:text-base font-medium">Time</p>
                    <p className="text-xs sm:text-sm">{time}</p>
                </div>
                <div className="text-right">
                    <p className="text-sm sm:text-base font-medium">Date</p>
                    <p className="text-xs sm:text-sm">{dateFormatter(date)}</p>
                </div>
            </div>
        </ContentSection>
    )
}