"use client";
import { useAppContext } from "@/lib/context/ContextProvider";
import { Table, TableRow } from "@/components";
import { APPOINTMENTS_OF_DOCTOR_TABLE_TITLES } from "@/lib/constants";

export default function AppointmentsSection({ data }) {
    const { openAppointmentModal } = useAppContext();
    return (
        <Table titles={APPOINTMENTS_OF_DOCTOR_TABLE_TITLES}>
            {data.map((appointment) => (
                <TableRow
                    key={appointment.appointmentId}
                    data={appointment}
                    type="appointmentsOfDoctor"
                    onClick={() => openAppointmentModal(appointment)}
                />
            ))}
        </Table>
    );
}
