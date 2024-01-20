"use client";
import useEvent from "@/hooks/useEvent";
import useAppointment from "@/hooks/useAppointment";
import { useAppContext } from "@/lib/context/ContextProvider";

import Link from "next/link";
import { ContentSection, Button, Loading, NoData, Table, TableRow } from "@/components";
import { UPCOMING_APPOINTMENT_TITLES } from "@/lib/constants";

export default function Home() {
    const { data: event, isLoading: isEventLoading } = useEvent("today");
    const { data: appointments, isLoading: isAppointmentLoading } = useAppointment();
    const { openAppointmentModal } = useAppContext();

    return (
        <main className="flex flex-col items-center gap-12 overflow-auto h-full">
            <ContentSection title="Current events">
                {isEventLoading && <Loading />}
                {!isEventLoading && event && (
                    <>
                        <h3 className="mb-10 text-xl lg:text-2xl text-center font-medium">
                            {event.title}
                        </h3>
                        <p className="lg:text-xl text-center">{event.description}</p>
                        <div className="mt-20 lg:mt-30 flex justify-center">
                            <Button type="button">
                                <Link href="/events">Read more</Link>
                            </Button>
                        </div>
                    </>
                )}
                {!isEventLoading && !event && <NoData />}
            </ContentSection>

            <ContentSection title="Upcoming appointments">
                {isAppointmentLoading && <Loading />}
                {!isAppointmentLoading && appointments && (
                    <Table titles={UPCOMING_APPOINTMENT_TITLES}>
                        {appointments.map((appointment) => (
                            <TableRow
                                key={appointment.appointmentId}
                                data={appointment}
                                type="upcomingAppointment"
                                onClick={() => {
                                    openAppointmentModal(appointment);
                                }}
                            />
                        ))}
                    </Table>
                )}
                {!isAppointmentLoading && !appointments && <NoData />}
            </ContentSection>
        </main>
    );
}
