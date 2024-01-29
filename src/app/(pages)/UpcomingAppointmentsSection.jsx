"use client";
import { useState } from "react";
import { Table, TableRow, Pagination } from "@/components";
import { UPCOMING_APPOINTMENT_TITLES } from "@/lib/constants";
import { useAppContext } from "@/lib/context/ContextProvider";

export default function UpcomingAppointmentSection({ appointments }) {
    const [currentPage, setCurrentPage] = useState(1);
    const { openAppointmentModal } = useAppContext();

    const minPage = (currentPage - 1) * 10;
    const maxPage = Math.min((currentPage - 1) * 10) + 10;
    const pageCount = Math.ceil(appointments.length / 10);

    return (
        <>
            <div className="overflow-auto">
                <Table titles={UPCOMING_APPOINTMENT_TITLES}>
                    {appointments.slice(minPage, maxPage).map((appointment) => (
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
            </div>

            <div className="flex justify-center mt-4">
                <Pagination
                    pageCount={pageCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </>
    );
}
