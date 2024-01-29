import getSession from "@/lib/getSession";
import { getUpcomingAppointments } from "@/lib/actions/appointment";
import { getUpcomingEvents } from "@/lib/actions/event";
import UpcomingAppointmentsSection from "./UpcomingAppointmentsSection";

import { Suspense } from "react";
import { ContentSection, Loading, NoData } from "@/components";
import UpcomingEventsSection from "./UpcomingEventsSection";
import MyPatientsSection from "./MyPatientsSection";
import { getPatientsByDoctor } from "@/lib/actions/patient";

const fetchData = async () => {
    try {
        const session = await getSession();
        const events = await getUpcomingEvents();
        const appointments =
            session.user.accessLevel === "doctor"
                ? await getUpcomingAppointments(session.user.userId)
                : await getUpcomingAppointments();
        const patients = await getPatientsByDoctor(session.user.userId);

        return {
            appointments: appointments ? JSON.parse(appointments) : null,
            patients: patients ? JSON.parse(patients) : null,
            events: events ? JSON.parse(events) : null,
        };
    } catch (error) {
        console.log(error);
    }
};

export default async function Home() {
    const { appointments, events, patients } = await fetchData();

    return (
        <main className="flex flex-col justify-center items-center px-2 sm:px-0 gap-10 overflow-auto">
            <ContentSection title="Upcoming events">
                <Suspense fallback={<Loading />}>
                    {events ? (
                        <UpcomingEventsSection events={events} />
                    ) : (
                        <NoData />
                    )}
                </Suspense>
            </ContentSection>
            <ContentSection title="Upcoming appointments">
                <Suspense fallback={<Loading />}>
                    {appointments ? (
                        <UpcomingAppointmentsSection
                            appointments={appointments}
                        />
                    ) : (
                        <NoData />
                    )}
                </Suspense>
            </ContentSection>
            {patients && (
                <ContentSection title="My patients">
                    <Suspense fallback={<Loading />}>
                        <MyPatientsSection patients={patients} />
                    </Suspense>
                </ContentSection>
            )}
        </main>
    );
}
