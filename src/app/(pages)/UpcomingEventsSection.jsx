import { Button } from "@/components";
import Link from "next/link";

export default function UpcomingEventsSection({ events }) {
    return (
        <>
            {events.map((event) => (
                <div key={event.eventId}>
                    <h3 className="text-xl sm:text-2xl font-medium text-center">
                        {event.title}
                    </h3>
                    <p className="text-sm sm:text-base text-center mt-1 mb-4 sm:mb-6">
                        {event.description.slice(0, 260) + "..."}
                    </p>
                </div>
            ))}
            <div className="flex justify-center">
                <Button type="action">
                    <Link href="/events">Read more</Link>
                </Button>
            </div>
        </>
    );
}
