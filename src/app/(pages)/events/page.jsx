"use client";
import { NoData, Loading } from "@/components";
import EventCart from "./components/EventCart";
import useEvent from "@/hooks/useEvent";

export default function Events() {
    const { data: events, isLoading } = useEvent();

    return (
        <main className="w-full h-full flex flex-col gap-10 items-center overflow-auto">
            {isLoading && <Loading />}
            {!isLoading &&
                events &&
                events.map((event) => (
                    <EventCart
                        key={event.eventId}
                        title={event.title}
                        description={event.description}
                        time={event.time}
                        date={event.date}
                    />
                ))}
            {!isLoading && !events && <NoData />}
        </main>
    );
}
